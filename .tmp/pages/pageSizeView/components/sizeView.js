import { GoogleAnalyticsProvider } from "../../../providers/ga";
import { TranslateService } from 'ng2-translate';
import { Component, Input } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { KidsSize, MenSize, WomenSize } from "whats-size";
import { WhatsSizeDatabase } from '../../../db/component';
import { SizeProvider } from '../../../providers/size';
import { PageProvider } from "../../../providers/page";
import { PageSizeForm } from "../../../pages/pageSizeForm/pageSizeForm";
export var SizeView = (function () {
    function SizeView(navCtrl, navParams, alertCtrl, translate, dbContext, size, page, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.dbContext = dbContext;
        this.size = size;
        this.page = page;
        this.ga = ga;
        this.model = {
            isLoaded: false,
            convertedSize: []
        };
    }
    Object.defineProperty(SizeView.prototype, "entity", {
        set: function (entity) {
            this.model.entity = entity;
            this.loadModel();
        },
        enumerable: true,
        configurable: true
    });
    SizeView.prototype.initialize = function () {
        var _this = this;
        return this.dbContext.stores.settings.get().then(function (settings) {
            _this.settings = settings;
            _this.country = _this.model.entity.source || settings.source || "usa";
            _this.kidsSize = new KidsSize(_this.country);
            _this.menSize = new MenSize(_this.country);
            _this.womenSize = new WomenSize(_this.country);
            _this.sizeConvertData = [
                { key: "kidsSimple", text: "SIZEVIEW.CONVERTLABELS.KIDS.SIMPLE", value: _this.kidsSize.simple },
                { key: "kidsShoes", text: "SIZEVIEW.CONVERTLABELS.KIDS.SHOES", value: _this.kidsSize.shoes },
                { key: "kidsClothes", text: "SIZEVIEW.CONVERTLABELS.KIDS.CLOTHES", value: _this.kidsSize.clothes },
                { key: "menSimple", text: "SIZEVIEW.CONVERTLABELS.MEN.SIMPLE", value: _this.menSize.simple },
                { key: "menShirts", text: "SIZEVIEW.CONVERTLABELS.MEN.SHIRTS", value: _this.menSize.shirts },
                { key: "menShoes", text: "SIZEVIEW.CONVERTLABELS.MEN.SHOES", value: _this.menSize.shoes },
                { key: "menSuits", text: "SIZEVIEW.CONVERTLABELS.MEN.SUITS", value: _this.menSize.suits },
                { key: "womenSimple", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SIMPLE", value: _this.womenSize.simple },
                { key: "womenBlouses", text: "SIZEVIEW.CONVERTLABELS.WOMEN.BLOUSES", value: _this.womenSize.blouses },
                { key: "womenCoats", text: "SIZEVIEW.CONVERTLABELS.WOMEN.COATS", value: _this.womenSize.coats },
                { key: "womenDresses", text: "SIZEVIEW.CONVERTLABELS.WOMEN.DRESSES", value: _this.womenSize.dresses },
                { key: "womenSkirts", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SKIRTS", value: _this.womenSize.skirts },
                { key: "womenShoes", text: "SIZEVIEW.CONVERTLABELS.WOMEN.SHOES", value: _this.womenSize.shoes }
            ];
        });
    };
    SizeView.prototype.loadModel = function () {
        var _this = this;
        return this.initialize().then(function () {
            switch (_this.model.entity.sizeType) {
                case "men":
                    _this.model.sizeTypeIcon = "male";
                    break;
                case "women":
                    _this.model.sizeTypeIcon = "female";
                    break;
                case "kids":
                    _this.model.sizeTypeIcon = "people";
                    break;
            }
        }).then(function () {
            return _this.initialize();
        }).then(function () {
            _this.getConvertedSizes();
            _this.model.isLoaded = true;
        });
    };
    SizeView.prototype.getConvertedSizes = function () {
        var _this = this;
        this.model.entity.sizes.forEach(function (sizeValue) {
            var sizeConvert = _this.sizeConvertData
                .filter(function (x) { return x.key == sizeValue.key; })[0];
            if (sizeConvert) {
                try {
                    var convertedSizes = sizeConvert.value.convert(sizeValue.value.toLowerCase());
                    var sizeModel = _this.size.convertToSizeModel(convertedSizes);
                    sizeModel.forEach(function (x) {
                        x.value = x.value.toUpperCase();
                    });
                    _this.model.convertedSize.push({ key: sizeConvert.text, value: sizeModel });
                }
                catch (e) {
                    _this.ga.trackException("Erro ao converter tamanho", true);
                }
            }
        });
    };
    SizeView.prototype.editSize = function (model) {
        this.navCtrl.push(PageSizeForm, {
            model: model
        });
    };
    SizeView.decorators = [
        { type: Component, args: [{
                    selector: "size-view",
                    templateUrl: "sizeView.html"
                },] },
    ];
    /** @nocollapse */
    SizeView.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: TranslateService, },
        { type: WhatsSizeDatabase, },
        { type: SizeProvider, },
        { type: PageProvider, },
        { type: GoogleAnalyticsProvider, },
    ];
    SizeView.propDecorators = {
        'entity': [{ type: Input },],
    };
    return SizeView;
}());
//# sourceMappingURL=sizeView.js.map