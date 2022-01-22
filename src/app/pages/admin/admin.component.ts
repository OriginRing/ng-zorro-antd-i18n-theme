import { Component, OnInit } from '@angular/core';
import { ThemeService } from "@my/services/theme.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
  }

}
