import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations: [ThemeComponent],
  exports: [
    ThemeComponent
  ],
  imports: [CommonModule, NzToolTipModule, NzIconModule]
})
export class ThemeModule { }
