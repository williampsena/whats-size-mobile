import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { GoogleAnalyticsProvider } from '../../providers/ga';

@Component({
  selector: 'page-pageAbout',
  templateUrl: 'pageAbout.html'
})
export class PageAbout {

  constructor(public navCtrl: NavController, public ga: GoogleAnalyticsProvider) {
    this.ga.trackView("Sobre");
  }
}
