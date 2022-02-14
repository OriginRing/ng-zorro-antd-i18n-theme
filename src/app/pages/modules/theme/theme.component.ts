import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from "@my/services/theme.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less']
})
export class ThemeComponent implements OnInit {

  constructor(private themeService: ThemeService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
    this.ref.markForCheck()
  }
}
