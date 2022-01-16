import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductCategoryService} from "@my/services/product-category.service";
import {Categories} from "@my/interfaces/productCategory";
import {CategoryComponent} from "@my/pages/admin/routes/product-category/modules/category/category.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {combineLatest, map, mergeMap, Subject, takeUntil} from "rxjs";
import {RefreshService} from "@my/services/refresh.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.less']
})
export class ProductCategoryComponent implements OnInit {
  productCategory: Categories[] = []
  per = 10;
  page = 1;
  totalCount = 0;
  constructor(
    private productCategoryService: ProductCategoryService,
    private modal: NzModalService,
    private refreshService: RefreshService,
    private ref: ChangeDetectorRef,
    private message: NzMessageService,
  ) { }
  private destroy$ = new Subject()

  ngOnInit(): void {
    combineLatest([this.refreshService.refresh$])
      .pipe(
        mergeMap(()=> this.productCategoryService.ProductCategoryGetData(this.per, this.page)),
        takeUntil(this.destroy$)
      )
    .subscribe(item=>{
      this.totalCount = item.totalCount || 0;
      this.productCategory = item.categories || [];
      this.ref.markForCheck();

    })
  }

  PageIndexChange($event: number): void{
    this.page = $event;
    // 分页需要更新列表 待完成
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
      .subscribe(item=>{
        if (item) {
          this.ref.markForCheck();
          this.refreshService.refresh();
          this.message.create('success', `${row.name}删除成功!`);
        }
    })
  }

}
