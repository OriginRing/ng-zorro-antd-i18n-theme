import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-localize',
  templateUrl: './localize.component.html',
  styleUrls: ['./localize.component.less']
})
export class LocalizeComponent implements OnInit {
  visible = true;
  isShow = true
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    localStorage.getItem('lang') === 'zh' ? this.visible = true : this.visible = false;
  }

  lang(bool: string): void {
    const value = bool ? 'zh' : 'en';
    const url = window.location.origin.split(':')[1];
    if (url !== '//127.0.0.1' && url !== '//localhost') {
      this.isShow = false;
      this.ref.markForCheck();
    } else {
      localStorage.setItem('lang', value);
      window.location.href =
        window.location.origin +
        '/' +
        value +
        '/' +
        window.location.hash
    }
  }

}
