import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductCategoryService } from "@my/services/product-category.service";
import { Categories } from "@my/interfaces/productCategory";
import { CategoryComponent } from "@my/pages/admin/routes/product-category/modules/category/category.component";
import { NzModalService } from "ng-zorro-antd/modal";
import { combineLatest, mergeMap, Subject, takeUntil, tap } from "rxjs";
import { RefreshService } from "@my/services/refresh.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { ProfileService } from "@my/services/profile.service";
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: [ './product-category.component.less' ]
})
export class ProductCategoryComponent implements OnInit {
  productCategory: Categories[] = []
  isLoading = true;
  pageSize = 10;
  pageIndex = 1;
  totalCount = 0;
  constructor(
    private productCategoryService: ProductCategoryService,
    private modal: NzModalService,
    private refreshService: RefreshService,
    private ref: ChangeDetectorRef,
    private message: NzMessageService,
    private profileService: ProfileService,
  ) { }
  private destroy$ = new Subject()

  ngOnInit(): void {
    const refresh$ = this.profileService.token$.pipe(
      tap(() => {
        this.isLoading = true;
        this.pageIndex = 1;
        this.ref.markForCheck();
      })
    );
    combineLatest([ refresh$, this.refreshService.refresh$ ])
      .pipe(
        mergeMap(([ token ]) => this.productCategoryService.ProductCategoryGetData(token, this.pageSize, this.pageIndex)),
        tap(() => {
          this.isLoading = false;
          this.ref.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
    .subscribe(item => {
      this.totalCount = item.totalCount || 0;
      this.productCategory = item.categories || [];
      this.ref.markForCheck();

    });
  }

  PageIndexChange(params: NzTableQueryParams): void{
    this.pageIndex = params.pageIndex;
    this.refreshService.refresh();
    this.ref.markForCheck();
  }

  createModal(): void {
    this.modal.create({
      nzTitle: 'Add ProductCategory',
      nzContent: CategoryComponent,
      nzWidth: '800px'
    });
  }

  DeleteData(row: Categories): void{
    this.productCategoryService.ProductCategoryDelete(row._id)
      .subscribe(item => {
        if (item) {
          this.ref.markForCheck();
          this.refreshService.refresh();
          this.message.create('success', `${row.name} 删除成功!`);
        }
    });
  }

}
