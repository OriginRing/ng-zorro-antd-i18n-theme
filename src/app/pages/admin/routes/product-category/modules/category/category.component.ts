import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzModalRef } from 'ng-zorro-antd/modal'
import { ProductCategoryService } from "@my/services/product-category.service";
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from "rxjs";
import {ProfileService} from "@my/services/profile.service";
import {RefreshService} from "@my/services/refresh.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private nzModalRef: NzModalRef,
    private productCategoryService: ProductCategoryService,
    private message: NzMessageService,
    private refreshService: RefreshService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      descriptions: [null, [Validators.required]],
      coverImg: [null, [Validators.required]],
      tag: [null, [Validators.required]],

    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.productCategoryService.ProductCategoryPostAdd(
        this.validateForm.value.name,
        this.validateForm.value.descriptions,
        this.validateForm.value.coverImg,
        this.validateForm.value.tag
      ).pipe(map(item => !!item))
        .subscribe(item=>{
          if (item) {
            this.nzModalRef.close();
            this.ref.markForCheck();
            this.refreshService.refresh();
            this.message.create('success', `${this.validateForm.value.name}添加成功!`);
          }
        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  cancel(): void{
    this.nzModalRef.close();
  }

}
