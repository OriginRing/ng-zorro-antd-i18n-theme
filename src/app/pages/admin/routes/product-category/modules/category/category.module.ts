import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule
  ]
})
export class CategoryModule {}
