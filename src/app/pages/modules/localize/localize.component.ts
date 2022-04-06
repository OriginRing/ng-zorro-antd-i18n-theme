import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localize',
  templateUrl: './localize.component.html',
  styleUrls: [ './localize.component.less' ]
})
export class LocalizeComponent implements OnInit {
  visible = true;
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    localStorage.getItem('lang') === 'zh' ? (this.visible = true) : (this.visible = false);
  }

  lang(bool: string): void {
    const value = bool ? 'zh' : 'en';
    localStorage.setItem('lang', value);
    window.location.href = window.location.origin + '/' + value + '/' + window.location.hash;
  }
}
