import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';
import { TranslateService } from 'ng2-translate';

import { KidsSize, MenSize, WomenSize } from "whats-size";
import { ISizeConvert } from 'whats-size/lib/helpers/dataSize';

import { PageHome } from '../pageHome/pageHome';
import { SizeProvider } from '../../providers/size';
import { SizeOptionsProvider } from "../../providers/options";
import { WhatsSizeDatabase } from '../../db/component';
import { ISettings } from '../../db/settings';

@Component({
  selector: "page-pageSearch",
  templateUrl: "pageSearch.html"
})
export class PageSearch {
  kidsSize: KidsSize;
  menSize: MenSize;
  womenSize: WomenSize;
  country: string;
  options: any;
  model: {
    isLoaded: Boolean,
    type?: string,
    sizeType?: string,
    size?: string,
    convertedSize?: Array<any>,
    sizeTypes?: Array<any>,
    availableSizes?: Array<any>,
    sizeConvert?: ISizeConvert
  };
  settings: ISettings;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public translate: TranslateService
    , public size: SizeProvider
    , public dbContext: WhatsSizeDatabase
    , public sizeOptions: SizeOptionsProvider
    , public ga: GoogleAnalyticsProvider) {

    ga.trackView("Busca rápida");
    this.model = {
      isLoaded: false,
      type: "",
      sizeType: "",
      size: "",
      convertedSize: [],
      sizeTypes: [],
      availableSizes: [],
      sizeConvert: null
    };


    this.dbContext.stores.settings.get().then(settings => {
      this.settings = settings;
      this.sizeOptions.initialize(this.settings);
      this.country = settings.source || "usa";
      this.kidsSize = new KidsSize(this.country);
      this.menSize = new MenSize(this.country);
      this.womenSize = new WomenSize(this.country);

      let options = {
        kids: sizeOptions.getKidsOptions(),
        men: sizeOptions.getMenOptions(),
        women: sizeOptions.getWomenOptions()
      };

      this.options = {
        types: [
          { value: "kids", text: "SIZES.SELECT_TYPES.KIDS" },
          { value: "men", text: "SIZES.SELECT_TYPES.MEN" },
          { value: "women", text: "SIZES.SELECT_TYPES.WOMAN" }
        ],
        kids: {
          all: [
            { value: "simple", text: "SIZES.SELECT_KIDS.SIMPLE" },
            { value: "clothes", text: "SIZES.SELECT_KIDS.CLOTHES" },
            { value: "shoes", text: "SIZES.SELECT_KIDS.SHOES" },
          ],
          shoes: Object.keys(this.kidsSize.shoes.getSizes()),
          simple: options.kids.simple,
          clothes: Object.keys(this.kidsSize.clothes.getSizes())
        },
        men: {
          all: [
            { value: "shirts", text: "SIZES.SELECT_MEN.SHIRTS" },
            { value: "shoes", text: "SIZES.SELECT_MEN.SHOES" },
            { value: "simple", text: "SIZES.SELECT_MEN.TSHIRTS" },
            { value: "suits", text: "SIZES.SELECT_MEN.SUITS" },
          ],
          shirts: Object.keys(this.menSize.shirts.getSizes()),
          shoes: Object.keys(this.menSize.shoes.getSizes()),
          simple: options.men.simple,
          suits: Object.keys(this.menSize.suits.getSizes()),
        },
        women: {
          all: [
            { value: "blouses", text: "SIZES.SELECT_WOMAN.BLOUSES" },
            { value: "coats", text: "SIZES.SELECT_WOMAN.COATS" },
            { value: "dresses", text: "SIZES.SELECT_WOMAN.DRESSES" },
            { value: "simple", text: "SIZES.SELECT_WOMAN.SHIRTS" },
            { value: "shoes", text: "SIZES.SELECT_WOMAN.SHOES" },
            { value: "skirts", text: "SIZES.SELECT_WOMAN.SKIRTS" },
          ],
          blouses: Object.keys(this.womenSize.blouses.getSizes()),
          coats: Object.keys(this.womenSize.coats.getSizes()),
          dresses: Object.keys(this.womenSize.dresses.getSizes()),
          simple: options.women.simple,
          shoes: Object.keys(this.womenSize.shoes.getSizes()),
          skirts: Object.keys(this.womenSize.skirts.getSizes()),
        }
      };

      this.options.types.sort(x => x.text);
      this.options.kids.all.sort(x => x.text);
      this.options.men.all.sort(x => x.text);
      this.options.women.all.sort(x => x.text);

      this.model.isLoaded = true;
    });
  }

  onChangeType(value: any) {
    this.loadSizeTypes(value);
  }

  loadSizeTypes(type: any) {
    switch (type) {
      case "kids":
        this.model.sizeTypes = this.options.kids.all;
        break;
      case "men":
        this.model.sizeTypes = this.options.men.all;
        break;
      case "women":
        this.model.sizeTypes = this.options.women.all;
        break;
    }
  }

  onChangeSizeType(value: any) {
    this.loadSizes(value);
  }

  loadSizes(sizeType: any) {
    switch (this.model.type) {
      case "kids":
        this.model.sizeConvert = this.kidsSize[sizeType] as ISizeConvert;
        this.model.availableSizes = this.options.kids[sizeType];
        break;
      case "men":
        this.model.sizeConvert = this.menSize[sizeType] as ISizeConvert;
        this.model.availableSizes = this.options.men[sizeType];
        break;
      case "women":
        this.model.sizeConvert = this.womenSize[sizeType] as ISizeConvert;
        this.model.availableSizes = this.options.women[sizeType];
        break;
    }
  }

  onChangeSize(value: string) {
    value = value.toLowerCase();

    var size = this.model.sizeConvert.convert(value);

    this.model.convertedSize = this.size.convertToSizeModel(size);

    this.model.convertedSize.forEach(x => {
      x.value = x.value.toUpperCase();
    });
  }

  goHome() {
    this.navCtrl.setPages([
      { page: PageHome }
    ]);
  }
}
