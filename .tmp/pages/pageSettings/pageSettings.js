import { PageProvider } from '../../providers/page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WhatsSizeDatabase } from '../../db/component';
import { TranslateService } from 'ng2-translate';
import { GoogleAnalyticsProvider } from '../../providers/ga';
export var PageSettings = (function () {
    function PageSettings(navCtrl, translate, dbContext, page, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dbContext = dbContext;
        this.page = page;
        this.ga = ga;
        ga.trackView("Configurações");
        this.model = { id: 0, lang: "", source: "" };
        dbContext.stores.settings.get().then(function (settings) {
            _this.model.id = settings.id;
            _this.model.lang = settings.lang || "en";
            _this.model.source = settings.source || "usa";
        });
    }
    PageSettings.prototype.updateSettings = function () {
        var _this = this;
        var settings = {
            id: this.model.id,
            lang: this.model.lang,
            source: this.model.source
        };
        this.dbContext.stores.settings.update(settings).then(function (x) {
            var alertMessage = _this.page.getTranslate("SETTINGS.ALERTS.UPDATE");
            _this.page.alert(alertMessage.message, alertMessage.title).then(function () {
                _this.restartApp();
            });
        }).catch(function (x) {
            var alertMessage = _this.page.getTranslate("SETTINGS.ALERTS.ERROR");
            _this.page.alert(alertMessage.message, alertMessage.title);
        });
    };
    PageSettings.prototype.normalizeSizes = function () {
        //TODO:
        this.dbContext.stores.sizes.all().then(function (x) {
            //Change sizes by new country
        });
    };
    PageSettings.prototype.restartApp = function () {
        document.location.href = "index.html";
    };
    PageSettings.prototype.goHome = function () {
        this.page.goHome();
    };
    PageSettings.decorators = [
        { type: Component, args: [{
                    selector: 'page-pageSettings',
                    templateUrl: 'pageSettings.html'
                },] },
    ];
    /** @nocollapse */
    PageSettings.ctorParameters = [
        { type: NavController, },
        { type: TranslateService, },
        { type: WhatsSizeDatabase, },
        { type: PageProvider, },
        { type: GoogleAnalyticsProvider, },
    ];
    return PageSettings;
}());
//# sourceMappingURL=pageSettings.js.map