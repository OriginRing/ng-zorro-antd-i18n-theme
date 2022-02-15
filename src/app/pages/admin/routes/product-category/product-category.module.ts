import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryComponent } from './product-category.component';
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { CategoryComponent } from './modules/category/category.component';
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";

@NgModule({
  declarations: [ ProductCategoryComponent, CategoryComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductCategoryRoutingModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule,
        NzIconModule,
        NzToolTipModule,
        NzFormModule,
        NzModalModule,
        NzPopconfirmModule
    ],
  providers: [ NzModalService, NzMessageService ]
})
export class ProductCategoryModule { }
