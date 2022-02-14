import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { ThemeModule } from '@my/pages/modules/theme/theme.module';
import { SettingModule } from "@my/pages/modules/setting/setting.module";
import { LocalizeModule } from "@my/pages/modules/localize/localize.module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule,
    NzPopoverModule,
    NzDividerModule,
    ThemeModule,
    SettingModule,
    LocalizeModule
  ]
})
export class AdminModule { }
