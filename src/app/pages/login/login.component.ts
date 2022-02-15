import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from "@my/services/admin.service";
import { ProfileService } from "@my/services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ]
})
export class LoginComponent implements OnInit {
  visible = true;
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.adminService.adminToken(this.validateForm.value.userName, this.validateForm.value.password)
        .subscribe(item => {
          if (item) {
            this.profileService.setToken(item);
            this.router.navigate([ '/admin' ]);
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

  onKey(): void {
    this.visible = false;
  }

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
  }

}
