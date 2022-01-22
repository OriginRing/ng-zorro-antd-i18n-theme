import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProfileService } from "@my/services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {
  visible: boolean = false;
  constructor(private ref: ChangeDetectorRef, private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  clickMe(): void {
    this.visible = false;
    this.profileService.setToken(null);
    this.router.navigate(["/login"]).then();
    this.ref.markForCheck();
  }

  change(value: boolean): void {
    this.visible = value;
    this.ref.markForCheck();
  }
}
