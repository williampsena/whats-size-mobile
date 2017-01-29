import { TranslateService } from 'ng2-translate';
import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';
import { KidsSize, MenSize, WomenSize } from "whats-size";
import { WhatsSizeDatabase } from '../../db/component';
import { SizeModel } from '../../db/size';
import { SizeOptionsProvider } from "../../providers/options";
import { SizeProvider } from "../../providers/size";
import { PageProvider } from "../../providers/page";
export var SizeFieldModel = (function () {
    function SizeFieldModel(args) {
        args = args || {};
        this.icon = args.icon;
        this.key = args.key;
        this.text = args.text;
        this.value = args.value;
        this.options = args.options || [];
    }
    return SizeFieldModel;
}());
export var PageSizeForm = (function () {
    function PageSizeForm(navCtrl, navParams, alertCtrl, translate, dbContext, size, sizeOptions, page, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.dbContext = dbContext;
        this.size = size;
        this.sizeOptions = sizeOptions;
        this.page = page;
        this.ga = ga;
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
    PageSizeForm.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dbContext.stores.settings.get().then(function (settings) {
            _this.settings = settings;
            _this.sizeOptions.initialize(_this.settings);
            _this.country = settings.source || "usa";
            _this.kidsSize = new KidsSize(_this.country);
            _this.menSize = new MenSize(_this.country);
            _this.womenSize = new WomenSize(_this.country);
            var options = {
                kids: _this.sizeOptions.getKidsOptions(),
                men: _this.sizeOptions.getMenOptions(),
                women: _this.sizeOptions.getWomenOptions()
            };
            _this.model.fields = {
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
            _this.options.types = _this.sizeOptions.getTypes();
            _this.loadFieldByTypes(_this.model.type);
            _this.loadSizeModel();
        });
    };
    PageSizeForm.prototype.loadSizeModel = function () {
        var model = this.navParams.get('model');
        if (model) {
            this.model.id = model.id;
            this.model.name = model.personName;
            this.model.type = model.sizeType;
            this.model.source = model.source;
            this.loadFieldByTypes(this.model.type);
            this.model.fields[model.sizeType].forEach(function (s) {
                var sizeModel = model.sizes.filter(function (x) { return x.key == s.key; })[0];
                if (sizeModel) {
                    s.value = sizeModel.value;
                }
            });
            this.model.isLoaded = true;
        }
        else {
            this.model.isLoaded = true;
        }
    };
    PageSizeForm.prototype.onChangeType = function (value) {
        this.loadFieldByTypes(value);
    };
    PageSizeForm.prototype.loadFieldByTypes = function (type) {
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
    };
    PageSizeForm.prototype.goToSlide = function (slideNum) {
        if (slideNum === 1) {
            if (!this.validateForm()) {
                return;
            }
        }
        this.slider.slideTo(slideNum, 500);
    };
    PageSizeForm.prototype.validateForm = function () {
        var valid = true;
        if (!this.model.name || this.model.name.length < 3) {
            valid = false;
        }
        if (!valid) {
            var alertMessage = this.page.getTranslate("SIZEFORM.ALERTS.VALIDATIONERROR");
            this.page.alert(alertMessage.title, alertMessage.message);
        }
        return valid;
    };
    PageSizeForm.prototype.createOrUpdateSize = function () {
        var _this = this;
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
        var success = function (x) {
            model.sizes.forEach(function (x) {
                var key = JSON.stringify([model.source, model.sizeType, x.key, x.value]);
                _this.ga.trackEvent("Tamanho", "Cadastro", key, 1);
            });
            var alertMessage = _this.page.getTranslate("SIZEFORM.ALERTS.SUCCESS");
            _this.page.alert(alertMessage.title, alertMessage.message).then(function (x) {
                _this.page.goHome();
            });
        };
        var error = function (x) {
            var alertMessage = _this.page.getTranslate("SIZEFORM.ALERTS.ERROR");
            _this.page.alert(alertMessage.title, alertMessage.message);
        };
        if (isNew) {
            this.dbContext.stores.sizes.create(model).then(success).catch(error);
        }
        else {
            this.dbContext.stores.sizes.update(model).then(success).catch(error);
        }
    };
    PageSizeForm.decorators = [
        { type: Component, args: [{
                    selector: "page-pageSizeForm",
                    templateUrl: "pageSizeForm.html"
                },] },
    ];
    /** @nocollapse */
    PageSizeForm.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: TranslateService, },
        { type: WhatsSizeDatabase, },
        { type: SizeProvider, },
        { type: SizeOptionsProvider, },
        { type: PageProvider, },
        { type: GoogleAnalyticsProvider, },
    ];
    PageSizeForm.propDecorators = {
        'slider': [{ type: ViewChild, args: ["pageSlider",] },],
    };
    return PageSizeForm;
}());
//# sourceMappingURL=pageSizeForm.js.map