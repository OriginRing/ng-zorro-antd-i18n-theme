import { Component, OnInit } from '@angular/core';
import {BannerService} from "@my/services/banner.service";
import {Banners} from "@my/interfaces/banner";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  banner: Banners[] = [];
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.bannerGetData().subscribe(item=>{
      this.banner = item.Banners || [];
    })
  }

}
