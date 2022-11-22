import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProfileService } from '@my/services/profile.service';
import { AppInitializerProvider } from '@my/app-initializer.service';
import { AppI18nService } from '@my/app-i18n.service';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    AppInitializerProvider,
    AppI18nService,
    {
      provide: APP_INITIALIZER,
      useFactory: (profileService: ProfileService) => () => profileService.boot(),
      deps: [ProfileService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
