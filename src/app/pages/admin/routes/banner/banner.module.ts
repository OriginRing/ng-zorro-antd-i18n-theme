import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule
  ]
})
export class BannerModule {}
