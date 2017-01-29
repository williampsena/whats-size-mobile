import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { WhatsSizeDatabase } from '../../db/component';
import { ISize } from '../../db/size';
import { GoogleAnalyticsProvider } from '../../providers/ga';

@Component({
  selector: 'page-pageHome',
  templateUrl: 'pageHome.html'
})
export class PageHome {
  @ViewChild('homeSlider') slider: Slides;

  model: {
    sizesCount: number,
    sizes: Array<ISize>,
    isLoaded: Boolean
  };

  homeSlider = {
    initialSlide: 0,
    loop: true,
    speed: 2000,
    pager: true
  };

  constructor(public navCtrl: NavController
    , public translate: TranslateService
    , public dbContext: WhatsSizeDatabase
    , public ga: GoogleAnalyticsProvider) {
    ga.trackView("Home");
    
    this.model = { sizesCount: 0, sizes: [], isLoaded: false };

    this.loadSizes();
  }

  loadSizes() {
    this.dbContext.stores.sizes.count().then(x => {
      this.model.sizesCount = x;
    }).then(() => {
      return this.dbContext.stores.sizes.all();
    }).then(sizes => {
      this.model.sizes = sizes;
      this.model.isLoaded = true;
    });
  }

  clickCount() {
    if (this.model.sizesCount > 0) {
      this.slider.slideTo(1, 500);

     this.ga.trackEvent("home", "click", "Click em quantidade de tamanhos", 1);
    }
  }
}
