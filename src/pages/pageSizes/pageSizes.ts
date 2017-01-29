import { Component } from "@angular/core";

import { NavController, NavParams, AlertController } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';

import { WhatsSizeDatabase } from '../../db/component';
import { SizeProvider } from "../../providers/size";
import { PageProvider } from "../../providers/page";

import { PageSizeForm } from "../../pages/pageSizeForm/pageSizeForm";
import { PageSizeView } from "../../pages/pageSizeView/pageSizeView";

@Component({
  selector: "page-pageSizes",
  templateUrl: "pageSizes.html"
})
export class PageSizes {
  model: {
    size?: any,
    sizes?: Array<any>
  };

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public alertCtrl: AlertController
    , public dbContext: WhatsSizeDatabase
    , public size: SizeProvider
    , public page: PageProvider
    , public ga: GoogleAnalyticsProvider) {
    ga.trackView("Tamanhos");

    this.model = {
      size: "",
      sizes: []
    };

    this.loadAllSizes();
  }

  loadAllSizes() {
    this.dbContext.stores.sizes.all().then(x => {
      this.model.sizes = x;
    });
  }

  onSelectedSize(value: any) {
    this.setSelectedSize(value);
  }

  setSelectedSize(id: string) {
    this.model.size = this.model.sizes.filter(x => x.id == id)[0];
  }

  goHome() {
    this.page.goHome();
  }

  goToSizeForm() {
    this.navCtrl.push(PageSizeForm, {
    });
  }

  deleteSize(model: any) {
    let alertMessage = this.page.getTranslate("SIZE.ALERTS.DELETE");

    this.page.confirm(alertMessage.title, alertMessage.message, () => {
      this.dbContext.stores.sizes.delete(model.id).then(x => {
        this.loadAllSizes();
      });
    });
  }

  editSize(model: any) {
    this.navCtrl.push(PageSizeView, {
      model: model
    });
  }
}
