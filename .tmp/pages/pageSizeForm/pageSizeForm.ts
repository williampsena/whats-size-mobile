import { TranslateService } from 'ng2-translate';
import { Component, ViewChild } from "@angular/core";

import { NavController, NavParams, Slides, AlertController } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';

import { KidsSize, MenSize, WomenSize } from "whats-size";

import { WhatsSizeDatabase } from '../../db/component';
import { SizeModel } from '../../db/size';
import { SizeOptionsProvider } from "../../providers/options";
import { SizeProvider } from "../../providers/size";
import { PageProvider } from "../../providers/page";
import { ISettings } from '../../db/settings';

export class SizeFieldModel {
  public icon: string;
  public key: string;
  public text: string;
  public value: string;
  public options: Array<string>;

  constructor(args: any) {
    args = args || {};

    this.icon = args.icon;
    this.key = args.key;
    this.text = args.text;
    this.value = args.value;
    this.options = args.options || [];
  }
}

@Component({
  selector: "page-pageSizeForm",
  templateUrl: "pageSizeForm.html"
})
export class PageSizeForm {
  @ViewChild("pageSlider") slider: Slides;
  kidsSize: KidsSize;
  menSize: MenSize;
  womenSize: WomenSize;
  country: string;
  options: any;
  model: {
    isLoaded: Boolean,
    id?: number,
    type?: string,
    name?: string,
    source?: string,
    fields?: {
      selected: Array<SizeFieldModel>,
      kids: Array<SizeFieldModel>,
      men: Array<SizeFieldModel>,
      women: Array<SizeFieldModel>
    }
  };
  settings: ISettings;


  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public alertCtrl: AlertController
    , public translate: TranslateService
    , public dbContext: WhatsSizeDatabase
    , public size: SizeProvider
    , public sizeOptions: SizeOptionsProvider
    , public page: PageProvider
    , public ga: GoogleAnalyticsProvider) {
    ga.trackView("Cadastro");

    this.model = {
      isLoaded: false,
      type: "kids",
      name: "",
      fields: {
        selected: [],
        kids: [],
        men: [],
        women: []
      }
    };

    this.options = {
      types: []
    };
  }

  ionViewDidLoad() {
    this.dbContext.stores.settings.get().then(settings => {
      this.settings = settings;
      this.sizeOptions.initialize(this.settings);
      this.country = settings.source || "usa";
      this.kidsSize = new KidsSize(this.country);
      this.menSize = new MenSize(this.country);
      this.womenSize = new WomenSize(this.country);

      let options = {
        kids: this.sizeOptions.getKidsOptions(),
        men: this.sizeOptions.getMenOptions(),
        women: this.sizeOptions.getWomenOptions()
      };

      this.model.fields = {
        selected: [],
        kids: [
          new SizeFieldModel({ key: "kidsSimple", text: "SIZES.SELECT_KIDS.SIMPLE", options: options.kids.simple }),
          new SizeFieldModel({ key: "kidsShoes", text: "SIZES.SELECT_KIDS.SHOES", options: options.kids.shoes }),
          new SizeFieldModel({ key: "kidsClothes", text: "SIZES.SELECT_KIDS.CLOTHES", options: options.kids.clothes }),
        ],
        men: [
          new SizeFieldModel({ key: "menSimple", text: "SIZES.SELECT_MEN.TSHIRTS", options: options.men.simple }),
          new SizeFieldModel({ key: "menShirts", text: "SIZES.SELECT_MEN.SHIRTS", options: options.men.shirts }),
          new SizeFieldModel({ key: "menShoes", text: "SIZES.SELECT_MEN.SHOES", options: options.men.shoes }),
          new SizeFieldModel({ key: "menSuits", text: "SIZES.SELECT_MEN.SUITS", options: options.men.suits }),
        ],
        women: [
          new SizeFieldModel({ key: "womenSimple", text: "SIZES.SELECT_WOMAN.SHIRTS", options: options.women.simple }),
          new SizeFieldModel({ key: "womenBlouses", text: "SIZES.SELECT_WOMAN.BLOUSES", options: options.women.blouses }),
          new SizeFieldModel({ key: "womenCoats", text: "SIZES.SELECT_WOMAN.COATS", options: options.women.coats }),
          new SizeFieldModel({ key: "womenDresses", text: "SIZES.SELECT_WOMAN.DRESSES", options: options.women.dresses }),
          new SizeFieldModel({ key: "womenSkirts", text: "SIZES.SELECT_WOMAN.SKIRTS", options: options.women.skirts }),
          new SizeFieldModel({ key: "womenShoes", text: "SIZES.SELECT_WOMAN.SHOES", options: options.women.shoes })
        ]
      };

      this.options.types = this.sizeOptions.getTypes();

      this.loadFieldByTypes(this.model.type);
      this.loadSizeModel();
    });
  }

  loadSizeModel() {
    let model = this.navParams.get('model') as SizeModel;

    if (model) {
      this.model.id = model.id;
      this.model.name = model.personName;
      this.model.type = model.sizeType;
      this.model.source = model.source;

      this.loadFieldByTypes(this.model.type);


      this.model.fields[model.sizeType].forEach((s: SizeFieldModel) => {
        let sizeModel = model.sizes.filter(x => x.key == s.key)[0];

        if (sizeModel) {
          s.value = sizeModel.value;
        }
      });

      this.model.isLoaded = true;
    } else {
      this.model.isLoaded = true;
    }
  }

  onChangeType(value: any) {
    this.loadFieldByTypes(value);
  }

  loadFieldByTypes(type: string) {
    switch (type) {
      case "kids":
        this.model.fields.selected = this.model.fields.kids;
        break;
      case "men":
        this.model.fields.selected = this.model.fields.men;
        break;
      case "women":
        this.model.fields.selected = this.model.fields.women;
        break;
    }
  }

  goToSlide(slideNum: number) {
    if (slideNum === 1) {
      if (!this.validateForm()) {
        return;
      }
    }

    this.slider.slideTo(slideNum, 500);
  }

  validateForm(): boolean {
    var valid = true;

    if (!this.model.name || this.model.name.length < 3) {
      valid = false;
    }

    if (!valid) {
      let alertMessage = this.page.getTranslate("SIZEFORM.ALERTS.VALIDATIONERROR");
      this.page.alert(alertMessage.title, alertMessage.message);
    }

    return valid;
  }

  createOrUpdateSize() {
    if (!this.validateForm()) {
      return;
    }

    var model = new SizeModel({
      id: this.model.id,
      personName: this.model.name,
      sizeType: this.model.type,
      source: this.settings.source || this.model.source,
      sizes: this.size.getSizeValues(this.model.fields.selected)
    });

    var isNew = !model.id;

    let success = x => {
      model.sizes.forEach(x => {
        let key = JSON.stringify([model.source, model.sizeType, x.key, x.value]);
        this.ga.trackEvent("Tamanho", "Cadastro", key, 1);
      });

      let alertMessage = this.page.getTranslate("SIZEFORM.ALERTS.SUCCESS");
      this.page.alert(alertMessage.title, alertMessage.message).then(x => {
        this.page.goHome();
      });
    };

    let error = x => {
      let alertMessage = this.page.getTranslate("SIZEFORM.ALERTS.ERROR");
      this.page.alert(alertMessage.title, alertMessage.message);
    };

    if (isNew) {
      this.dbContext.stores.sizes.create(model).then(success).catch(error);
    } else {
      this.dbContext.stores.sizes.update(model).then(success).catch(error);
    }
  }
}
