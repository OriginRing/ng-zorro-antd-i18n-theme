import { Injectable } from '@angular/core';
import { NzConfigService } from "ng-zorro-antd/core/config";

enum ThemeType {
  dark = 'dark',
  default = 'default',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = ThemeType.default;

  constructor(private nzConfigService: NzConfigService) {}

  private reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          this.onDarkModeChange(this.currentTheme);
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }

  onDarkModeChange(dark: string): void {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: dark ==='dark' ? 'vs-dark' : 'vs'
      }
    });
  }
}
