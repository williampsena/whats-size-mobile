import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { WhatsSizeDatabase } from '../../db/component';
import { GoogleAnalyticsProvider } from '../../providers/ga';
export var PageHome = (function () {
    function PageHome(navCtrl, translate, dbContext, ga) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dbContext = dbContext;
        this.ga = ga;
        this.homeSlider = {
            initialSlide: 0,
            loop: true,
            speed: 2000,
            pager: true
        };
        ga.trackView("Home");
        this.model = { sizesCount: 0, sizes: [], isLoaded: false };
        this.loadSizes();
    }
    PageHome.prototype.loadSizes = function () {
        var _this = this;
        this.dbContext.stores.sizes.count().then(function (x) {
            _this.model.sizesCount = x;
        }).then(function () {
            return _this.dbContext.stores.sizes.all();
        }).then(function (sizes) {
            _this.model.sizes = sizes;
            _this.model.isLoaded = true;
        });
    };
    PageHome.prototype.clickCount = function () {
        if (this.model.sizesCount > 0) {
            this.slider.slideTo(1, 500);
            this.ga.trackEvent("home", "click", "Click em quantidade de tamanhos", 1);
        }
    };
    PageHome.decorators = [
        { type: Component, args: [{
                    selector: 'page-pageHome',
                    templateUrl: 'pageHome.html'
                },] },
    ];
    /** @nocollapse */
    PageHome.ctorParameters = [
        { type: NavController, },
        { type: TranslateService, },
        { type: WhatsSizeDatabase, },
        { type: GoogleAnalyticsProvider, },
    ];
    PageHome.propDecorators = {
        'slider': [{ type: ViewChild, args: ['homeSlider',] },],
    };
    return PageHome;
}());
//# sourceMappingURL=pageHome.js.map