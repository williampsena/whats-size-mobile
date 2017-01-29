import { SettingsModel } from '../db/settings';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate';

import { PageHome } from '../pages/pageHome/pageHome';
import { PageSizes } from '../pages/pageSizes/pageSizes';
import { PageSearch } from '../pages/pageSearch/pageSearch';
import { PageAbout } from '../pages/pageAbout/pageAbout';
import { PageSettings } from '../pages/pageSettings/pageSettings';
import { WhatsSizeDatabase } from '../db/component';
import { GoogleAnalyticsProvider } from '../providers/ga';
import {CacheService} from "ionic-cache/ionic-cache";

@Component({
  templateUrl: 'app.html'
})
export class WhatsSizeApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageHome;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform
  , public translate: TranslateService
  , public dbContext: WhatsSizeDatabase
  , public cache: CacheService
  , public ga: GoogleAnalyticsProvider) {
    this.cache.setDefaultTTL(60 * 60);
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MENU.HOME', component: PageHome },
      { title: 'MENU.SIZEFORM', component: PageSizes },
      { title: 'MENU.QUICKSEARCH', component: PageSearch },
      { title: 'MENU.SETTINGS', component: PageSettings },
      { title: 'MENU.ABOUT', component: PageAbout },
    ];
  }

  handleErrors() {
    window.onerror = (message: string, filename?: string, lineno?: number, colno?: number, error?: Error) => {
      this.ga.trackException(message, true);
      console.log(JSON.stringify(message));
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      return this.loadSettings().then(() => {
        Splashscreen.hide();
        this.handleErrors();
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  loadSettings() {
    return this.dbContext.stores.settings.get().then(settings => {
      var defineLang = () => {
        this.translate.setDefaultLang(settings.lang);
        this.translate.use(settings.lang);
      };

      if (!settings) {
        var lang = this.translate.getBrowserLang() || "en";
        var source = "";

        switch (lang) {
          case "pt":
            source = "brl";
            break;
          default:
            source = "usa";
            break;
        }

        settings = new SettingsModel({
          lang: lang,
          source: source
        });

        return this.dbContext.stores.settings.create(settings).then(() => {
          defineLang();
        })
      }

      return defineLang();
    });
  }
}
