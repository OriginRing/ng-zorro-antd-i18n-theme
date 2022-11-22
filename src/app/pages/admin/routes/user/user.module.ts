import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCronExpressionModule } from "ng-zorro-antd/cron-expression";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzMessageService } from "ng-zorro-antd/message";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    NzCodeEditorModule,
    NzFormModule,
    NzInputModule,
    NzCronExpressionModule,
    NzButtonModule,
    NzDividerModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: NzMessageService}
  ]
})
export class UserModule { }
