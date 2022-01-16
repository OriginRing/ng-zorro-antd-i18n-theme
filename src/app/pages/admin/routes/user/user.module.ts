import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    NzCodeEditorModule
  ]
})
export class UserModule { }
