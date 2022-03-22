import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProductCategoryService } from "@my/services/product-category.service";
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from "rxjs";
import { RefreshService } from "@my/services/refresh.service";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { AdminService } from "@my/services/admin.service";
import { url } from "@my/uitls/url";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.less' ]
})
export class CategoryComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  fileList: NzUploadFile[] = [];
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private nzModalRef: NzModalRef,
    private productCategoryService: ProductCategoryService,
    private message: NzMessageService,
    private refreshService: RefreshService,
    private adminService: AdminService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      descriptions: [ null, [ Validators.required ] ],
      coverImg: [ null, [ Validators.required ] ],
      tag: [ null, [ Validators.required ] ],

    });
  }

  submitForm(): void {
    this.validateForm.patchValue({ coverImg: this.avatarUrl });
    if (this.validateForm.valid) {
      this.productCategoryService.ProductCategoryPostAdd(
        this.validateForm.value.name,
        this.validateForm.value.descriptions,
        this.validateForm.value.coverImg,
        this.validateForm.value.tag
      ).pipe(map(item => !!item))
        .subscribe(item => {
          if (item) {
            this.nzModalRef.close();
            this.ref.markForCheck();
            this.refreshService.refresh();
            this.message.create('success', `${this.validateForm.value.name}添加成功!`);
          }
        });
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

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    this.handleUpload();
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    this.adminService.uploadFile(formData)
      .subscribe(item => {
        this.avatarUrl = url + item;
        this.ref.markForCheck();
      });
  }
}
