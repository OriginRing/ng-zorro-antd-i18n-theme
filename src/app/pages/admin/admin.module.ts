import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { SettingComponent } from "@my/pages/modules/setting/setting.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzPopoverModule } from "ng-zorro-antd/popover";

@NgModule({
  declarations: [
    AdminComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule,
    NzPopoverModule
  ]
})
export class AdminModule { }
