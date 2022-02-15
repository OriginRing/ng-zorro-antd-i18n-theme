import { ChangeDetectorRef, Component } from '@angular/core';
import { ThemeService } from "@my/services/theme.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: [ './theme.component.less' ]
})
export class ThemeComponent {

  constructor(private themeService: ThemeService, private ref: ChangeDetectorRef) { }

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
    this.ref.markForCheck();
  }
}
