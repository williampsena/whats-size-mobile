import { PageProvider } from '../../providers/page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WhatsSizeDatabase } from '../../db/component';
import { TranslateService } from 'ng2-translate';
import { GoogleAnalyticsProvider } from '../../providers/ga';

@Component({
  selector: 'page-pageSettings',
  templateUrl: 'pageSettings.html'
})
export class PageSettings {
  model: {
    id: number,
    lang: string,
    source: string
  };

  constructor(public navCtrl: NavController
    , public translate: TranslateService
    , public dbContext: WhatsSizeDatabase
    , public page: PageProvider
    , public ga: GoogleAnalyticsProvider) {
    ga.trackView("Configurações");

    this.model = { id: 0, lang: "", source: "" };

    dbContext.stores.settings.get().then(settings => {
      this.model.id = settings.id;
      this.model.lang = settings.lang || "en";
      this.model.source = settings.source || "usa";
    });
  }

  updateSettings() {
    var settings = {
      id: this.model.id,
      lang: this.model.lang,
      source: this.model.source
    };


    this.dbContext.stores.settings.update(settings).then(x => {
      let alertMessage = this.page.getTranslate("SETTINGS.ALERTS.UPDATE");
      this.page.alert(alertMessage.message, alertMessage.title).then(() => {
        this.restartApp();
      })
    }).catch(x => {
      let alertMessage = this.page.getTranslate("SETTINGS.ALERTS.ERROR");
      this.page.alert(alertMessage.message, alertMessage.title);
    })
  }

  normalizeSizes() {
    //TODO:
    this.dbContext.stores.sizes.all().then(x => {
      //Change sizes by new country
    });
  }

  restartApp() {
    document.location.href = "index.html";
  }

  goHome() {
    this.page.goHome();
  }
}
