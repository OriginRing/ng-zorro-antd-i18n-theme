import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizeComponent } from './localize.component';
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LocalizeComponent
  ],
  exports: [
    LocalizeComponent
  ],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule
  ]
})
export class LocalizeModule { }
