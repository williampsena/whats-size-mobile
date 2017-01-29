import { GoogleAnalyticsProvider } from "../../../providers/ga";
import { TranslateService } from 'ng2-translate';
import { Component, Input } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { KidsSize, MenSize, WomenSize } from "whats-size";
import { ISizeConvert } from 'whats-size/lib/helpers/dataSize';

import { WhatsSizeDatabase } from '../../../db/component';
import { SizeProvider, SizeViewModel } from '../../../providers/size';
import { PageProvider } from "../../../providers/page";
import { PageSizeForm } from "../../../pages/pageSizeForm/pageSizeForm";
import { SizeModel } from '../../../db/size';
import { ISettings } from '../../../db/settings';

@Component({
  selector: "size-view",
  templateUrl: "sizeView.html"
})
export class SizeView {
  kidsSize: KidsSize;
  menSize: MenSize;
  womenSize: WomenSize;
  country: string;
  sizeConvertData: [
    { key: string, text: string, value: ISizeConvert }
  ];

  @Input()
  set entity(entity: SizeModel) {
    this.model.entity = entity;
    this.loadModel();
  }

  model: {
    isLoaded: Boolean,
    sizeTypeIcon?: string,
    convertedSize?: Array<{ key: string, value: SizeViewModel[] }>,
    entity?: SizeModel
  };

  settings: ISettings;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public alertCtrl: AlertController
    , public translate: TranslateService
    , public dbContext: WhatsSizeDatabase
    , public size: SizeProvider
    , public page: PageProvider
    , public ga: GoogleAnalyticsProvider) {

    this.model = {
      isLoaded: false,
      convertedSize: []
    };
  }

  initialize() {
    return this.dbContext.stores.settings.get().then(settings => {
      this.settings = settings;
      this.country = this.model.entity.source || settings.source || "usa";
      this.kidsSize = new KidsSize(this.country);
      this.menSize = new MenSize(this.country);
      this.womenSize = new WomenSize(this.country);

      this.sizeConvertData = [
        { key: "kidsSimple", text: "SIZEVIEW.CONVERTLABELS.KIDS.SIMPLE", value: this.kidsSize.simple },
        { key: "kidsShoes", text: "SIZEVIEW.CONVERTLABELS.KIDS.SHOES", value: this.kidsSize.shoes },
        { key: "kidsClothes", text: "SIZEVIEW.CONVERTLABELS.KIDS.CLOTHES", value: this.kidsSize.clothes },
        { key: "menSimple", text: "SIZEVIEW.CONVERTLABELS.MEN.SIMPLE", value: this.menSize.simple },
        { key: "menShirts", text: "SIZEVIEW.CONVERTLABELS.MEN.SHIRTS", value: this.menSize.shirts },
        { key: "menShoes", text: "SIZEVIEW.CONVERTLABELS.MEN.SHOES", value: this.menSize.shoes },
        { key: "menSuits", text: "SIZEVIEW.CONVERTLABELS.MEN.SUITS", value: this.menSize.suits },
        { key: "womenSimple", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SIMPLE", value: this.womenSize.simple },
        { key: "womenBlouses", text: "SIZEVIEW.CONVERTLABELS.WOMEN.BLOUSES", value: this.womenSize.blouses },
        { key: "womenCoats", text: "SIZEVIEW.CONVERTLABELS.WOMEN.COATS", value: this.womenSize.coats },
        { key: "womenDresses", text: "SIZEVIEW.CONVERTLABELS.WOMEN.DRESSES", value: this.womenSize.dresses },
        { key: "womenSkirts", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SKIRTS", value: this.womenSize.skirts },
        { key: "womenShoes", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SHOES", value: this.womenSize.shoes }
      ];
    });

  }

  loadModel() {
    return this.initialize().then(() => {
      switch (this.model.entity.sizeType) {
        case "men":
          this.model.sizeTypeIcon = "male";
          break;
        case "women":
          this.model.sizeTypeIcon = "female";
          break;
        case "kids":
          this.model.sizeTypeIcon = "people";
          break;
      }
    }).then(() => {
      return this.initialize();
    }).then(() => {
      this.getConvertedSizes();
      this.model.isLoaded = true;
    });
  }

  getConvertedSizes() {
    this.model.entity.sizes.forEach(sizeValue => {
      var sizeConvert = this.sizeConvertData
        .filter(x => x.key == sizeValue.key)[0];

      if (sizeConvert) {
        try{
        var convertedSizes = sizeConvert.value.convert(sizeValue.value.toLowerCase());
        var sizeModel = this.size.convertToSizeModel(convertedSizes);

        sizeModel.forEach(x => {
          x.value = x.value.toUpperCase();
        });

        this.model.convertedSize.push({ key: sizeConvert.text, value: sizeModel });
        } catch(e){
          this.ga.trackException("Erro ao converter tamanho", true);
        }
      }
    });
  }

  editSize(model: any) {
    this.navCtrl.push(PageSizeForm, {
      model: model
    });
  }
}
