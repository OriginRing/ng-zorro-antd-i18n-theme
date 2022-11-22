import { en_US, NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { LOCALE_ID } from '@angular/core';

export const AppI18nService = {
  provide: NZ_I18N,
  useFactory: (localId: string) => {
    switch (localId) {
      case 'en':
        return en_US;
      case 'zh':
        return zh_CN;
      default:
        return en_US;
    }
  },
  deps: [LOCALE_ID]
};
