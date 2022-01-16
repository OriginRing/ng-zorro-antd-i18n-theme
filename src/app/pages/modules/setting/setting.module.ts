import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    NzPopoverModule
  ]
})
export class SettingModule { }
