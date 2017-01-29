import { SettingsModel } from '../db/settings';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { PageHome } from '../pages/pageHome/pageHome';
import { PageSizes } from '../pages/pageSizes/pageSizes';
import { PageSearch } from '../pages/pageSearch/pageSearch';
import { PageAbout } from '../pages/pageAbout/pageAbout';
import { PageSettings } from '../pages/pageSettings/pageSettings';
import { WhatsSizeDatabase } from '../db/component';
import { GoogleAnalyticsProvider } from '../providers/ga';
import { CacheService } from "ionic-cache/ionic-cache";
export var WhatsSizeApp = (function () {
    function WhatsSizeApp(platform, translate, dbContext, cache, ga) {
        this.platform = platform;
        this.translate = translate;
        this.dbContext = dbContext;
        this.cache = cache;
        this.ga = ga;
        this.rootPage = PageHome;
        this.cache.setDefaultTTL(60 * 60);
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'MENU.HOME', component: PageHome },
            { title: 'MENU.SIZEFORM', component: PageSizes },
            { title: 'MENU.QUICKSEARCH', component: PageSearch },
            { title: 'MENU.SETTINGS', component: PageSettings },
            { title: 'MENU.ABOUT', component: PageAbout },
        ];
    }
    WhatsSizeApp.prototype.handleErrors = function () {
        var _this = this;
        window.onerror = function (message, filename, lineno, colno, error) {
            _this.ga.trackException(message, true);
            console.log(JSON.stringify(message));
        };
    };
    WhatsSizeApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            return _this.loadSettings().then(function () {
                Splashscreen.hide();
                _this.handleErrors();
            });
        });
    };
    WhatsSizeApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    WhatsSizeApp.prototype.loadSettings = function () {
        var _this = this;
        return this.dbContext.stores.settings.get().then(function (settings) {
            var defineLang = function () {
                _this.translate.setDefaultLang(settings.lang);
                _this.translate.use(settings.lang);
            };
            if (!settings) {
                var lang = _this.translate.getBrowserLang() || "en";
                var source = "";
                switch (lang) {
                    case "pt":
                        source = "brl";
                        break;
                    default:
                        source = "usa";
                        break;
                }
                settings = new SettingsModel({
                    lang: lang,
                    source: source
                });
                return _this.dbContext.stores.settings.create(settings).then(function () {
                    defineLang();
                });
            }
            return defineLang();
        });
    };
    WhatsSizeApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    WhatsSizeApp.ctorParameters = [
        { type: Platform, },
        { type: TranslateService, },
        { type: WhatsSizeDatabase, },
        { type: CacheService, },
        { type: GoogleAnalyticsProvider, },
    ];
    WhatsSizeApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return WhatsSizeApp;
}());
//# sourceMappingURL=app.component.js.map