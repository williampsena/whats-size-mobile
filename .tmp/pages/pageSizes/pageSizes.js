import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/ga';
import { WhatsSizeDatabase } from '../../db/component';
import { SizeProvider } from "../../providers/size";
import { PageProvider } from "../../providers/page";
import { PageSizeForm } from "../../pages/pageSizeForm/pageSizeForm";
import { PageSizeView } from "../../pages/pageSizeView/pageSizeView";
export var PageSizes = (function () {
    function PageSizes(navCtrl, navParams, alertCtrl, dbContext, size, page, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dbContext = dbContext;
        this.size = size;
        this.page = page;
        this.ga = ga;
        ga.trackView("Tamanhos");
        this.model = {
            size: "",
            sizes: []
        };
        this.loadAllSizes();
    }
    PageSizes.prototype.loadAllSizes = function () {
        var _this = this;
        this.dbContext.stores.sizes.all().then(function (x) {
            _this.model.sizes = x;
        });
    };
    PageSizes.prototype.onSelectedSize = function (value) {
        this.setSelectedSize(value);
    };
    PageSizes.prototype.setSelectedSize = function (id) {
        this.model.size = this.model.sizes.filter(function (x) { return x.id == id; })[0];
    };
    PageSizes.prototype.goHome = function () {
        this.page.goHome();
    };
    PageSizes.prototype.goToSizeForm = function () {
        this.navCtrl.push(PageSizeForm, {});
    };
    PageSizes.prototype.deleteSize = function (model) {
        var _this = this;
        var alertMessage = this.page.getTranslate("SIZE.ALERTS.DELETE");
        this.page.confirm(alertMessage.title, alertMessage.message, function () {
            _this.dbContext.stores.sizes.delete(model.id).then(function (x) {
                _this.loadAllSizes();
            });
        });
    };
    PageSizes.prototype.editSize = function (model) {
        this.navCtrl.push(PageSizeView, {
            model: model
        });
    };
    PageSizes.decorators = [
        { type: Component, args: [{
                    selector: "page-pageSizes",
                    templateUrl: "pageSizes.html"
                },] },
    ];
    /** @nocollapse */
    PageSizes.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: WhatsSizeDatabase, },
        { type: SizeProvider, },
        { type: PageProvider, },
        { type: GoogleAnalyticsProvider, },
    ];
    return PageSizes;
}());
//# sourceMappingURL=pageSizes.js.map