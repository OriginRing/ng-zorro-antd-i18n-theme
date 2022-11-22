import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ProductService } from '@my/services/product.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RefreshService } from '@my/services/refresh.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProfileService } from '@my/services/profile.service';
import { ProductList } from '@my/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  product: ProductList[] = [];
  isLoading = true;
  pageSize = 10;
  pageIndex = 1;
  totalCount = 0;
  constructor(
    private productService: ProductService,
    private modal: NzModalService,
    private refreshService: RefreshService,
    private ref: ChangeDetectorRef,
    private message: NzMessageService,
    private profileService: ProfileService
  ) {}
  private destroy$ = new Subject();
  ngOnInit(): void {
    const refresh$ = this.profileService.token$.pipe(
      tap(() => {
        this.isLoading = true;
        this.pageIndex = 1;
        this.ref.markForCheck();
      })
    );
    combineLatest([refresh$, this.refreshService.refresh$])
      .pipe(
        mergeMap(([token]) => this.productService.ProductGetData(token, this.pageSize, this.pageIndex)),
        tap(() => {
          this.isLoading = false;
          this.ref.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(item => {
        this.totalCount = item.totalCount || 0;
        this.product = item.products || [];
        this.ref.markForCheck();
      });
  }

  PageIndexChange(params: NzTableQueryParams): void {
    this.pageIndex = params.pageIndex;
    this.refreshService.refresh();
    this.ref.markForCheck();
  }

  createModal(): void {
    this.modal.create({
      nzTitle: 'Add Product',
      nzContent: '',
      nzWidth: '800px'
    });
  }

  DeleteData(row: ProductList): void {
    this.productService.ProductDelete(row._id).subscribe(item => {
      if (item) {
        this.ref.markForCheck();
        this.refreshService.refresh();
        this.message.create('success', `${row.name} 删除成功!`);
      }
    });
  }
}
