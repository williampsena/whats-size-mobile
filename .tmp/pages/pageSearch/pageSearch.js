import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';
import { TranslateService } from 'ng2-translate';
import { KidsSize, MenSize, WomenSize } from "whats-size";
import { PageHome } from '../pageHome/pageHome';
import { SizeProvider } from '../../providers/size';
import { SizeOptionsProvider } from "../../providers/options";
import { WhatsSizeDatabase } from '../../db/component';
export var PageSearch = (function () {
    function PageSearch(navCtrl, navParams, translate, size, dbContext, sizeOptions, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.size = size;
        this.dbContext = dbContext;
        this.sizeOptions = sizeOptions;
        this.ga = ga;
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
        this.dbContext.stores.settings.get().then(function (settings) {
            _this.settings = settings;
            _this.sizeOptions.initialize(_this.settings);
            _this.country = settings.source || "usa";
            _this.kidsSize = new KidsSize(_this.country);
            _this.menSize = new MenSize(_this.country);
            _this.womenSize = new WomenSize(_this.country);
            var options = {
                kids: sizeOptions.getKidsOptions(),
                men: sizeOptions.getMenOptions(),
                women: sizeOptions.getWomenOptions()
            };
            _this.options = {
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
                    shoes: Object.keys(_this.kidsSize.shoes.getSizes()),
                    simple: options.kids.simple,
                    clothes: Object.keys(_this.kidsSize.clothes.getSizes())
                },
                men: {
                    all: [
                        { value: "shirts", text: "SIZES.SELECT_MEN.SHIRTS" },
                        { value: "shoes", text: "SIZES.SELECT_MEN.SHOES" },
                        { value: "simple", text: "SIZES.SELECT_MEN.TSHIRTS" },
                        { value: "suits", text: "SIZES.SELECT_MEN.SUITS" },
                    ],
                    shirts: Object.keys(_this.menSize.shirts.getSizes()),
                    shoes: Object.keys(_this.menSize.shoes.getSizes()),
                    simple: options.men.simple,
                    suits: Object.keys(_this.menSize.suits.getSizes()),
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
                    blouses: Object.keys(_this.womenSize.blouses.getSizes()),
                    coats: Object.keys(_this.womenSize.coats.getSizes()),
                    dresses: Object.keys(_this.womenSize.dresses.getSizes()),
                    simple: options.women.simple,
                    shoes: Object.keys(_this.womenSize.shoes.getSizes()),
                    skirts: Object.keys(_this.womenSize.skirts.getSizes()),
                }
            };
            _this.options.types.sort(function (x) { return x.text; });
            _this.options.kids.all.sort(function (x) { return x.text; });
            _this.options.men.all.sort(function (x) { return x.text; });
            _this.options.women.all.sort(function (x) { return x.text; });
            _this.model.isLoaded = true;
        });
    }
    PageSearch.prototype.onChangeType = function (value) {
        this.loadSizeTypes(value);
    };
    PageSearch.prototype.loadSizeTypes = function (type) {
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
    };
    PageSearch.prototype.onChangeSizeType = function (value) {
        this.loadSizes(value);
    };
    PageSearch.prototype.loadSizes = function (sizeType) {
        switch (this.model.type) {
            case "kids":
                this.model.sizeConvert = this.kidsSize[sizeType];
                this.model.availableSizes = this.options.kids[sizeType];
                break;
            case "men":
                this.model.sizeConvert = this.menSize[sizeType];
                this.model.availableSizes = this.options.men[sizeType];
                break;
            case "women":
                this.model.sizeConvert = this.womenSize[sizeType];
                this.model.availableSizes = this.options.women[sizeType];
                break;
        }
    };
    PageSearch.prototype.onChangeSize = function (value) {
        value = value.toLowerCase();
        var size = this.model.sizeConvert.convert(value);
        this.model.convertedSize = this.size.convertToSizeModel(size);
        this.model.convertedSize.forEach(function (x) {
            x.value = x.value.toUpperCase();
        });
    };
    PageSearch.prototype.goHome = function () {
        this.navCtrl.setPages([
            { page: PageHome }
        ]);
    };
    PageSearch.decorators = [
        { type: Component, args: [{
                    selector: "page-pageSearch",
                    templateUrl: "pageSearch.html"
                },] },
    ];
    /** @nocollapse */
    PageSearch.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: TranslateService, },
        { type: SizeProvider, },
        { type: WhatsSizeDatabase, },
        { type: SizeOptionsProvider, },
        { type: GoogleAnalyticsProvider, },
    ];
    return PageSearch;
}());
//# sourceMappingURL=pageSearch.js.map