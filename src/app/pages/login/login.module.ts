import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMessageModule } from "ng-zorro-antd/message"
import { ThemeModule } from "@my/pages/modules/theme/theme.module";
import { LocalizeModule } from "@my/pages/modules/localize/localize.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzMessageModule,
    ThemeModule,
    LocalizeModule
  ]
})
export class LoginModule { }
