import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations: [
    SettingComponent
  ],
  exports: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    NzPopoverModule,
    NzIconModule
  ]
})
export class SettingModule { }
