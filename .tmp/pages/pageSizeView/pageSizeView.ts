import { TranslateService } from 'ng2-translate';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { PageProvider } from "../../providers/page";
import { SizeModel } from '../../db/size';

@Component({
  selector: "page-pageSizeView",
  templateUrl: "pageSizeView.html"
})
export class PageSizeView {
  public model: {
    entity?: SizeModel
  };

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public translate: TranslateService
    , public page: PageProvider) {

    this.model = {
      entity: null
    };

    this.loadModel();
  }

  loadModel() {
    this.model.entity = this.navParams.get('model') as SizeModel;
  }

  goHome() {
    this.page.goHome();
  }
}
