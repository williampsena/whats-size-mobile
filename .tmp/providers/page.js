import { TranslateService } from 'ng2-translate';
import { Injectable } from "@angular/core";
import { AlertController, App } from "ionic-angular";
import { PageHome } from "../pages/pageHome/pageHome";
export var PageProvider = (function () {
    function PageProvider(app, translate) {
        this.app = app;
        this.translate = translate;
        this.navCtrl = app.getActiveNav();
        this.alertCtrl = new AlertController(app);
    }
    PageProvider.prototype.goHome = function () {
        this.navCtrl.setPages([
            { page: PageHome }
        ]);
    };
    PageProvider.prototype.alert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ["OK"]
        });
        return alert.present();
    };
    PageProvider.prototype.confirm = function (message, title, ok, cancel) {
        cancel = cancel || function () { };
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Sim",
                    handler: ok
                },
                {
                    text: "Não",
                    handler: cancel
                }
            ]
        });
        confirm.present();
    };
    PageProvider.prototype.getTranslate = function (key, args) {
        return this.translate.get(key, args).value;
    };
    PageProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageProvider.ctorParameters = [
        { type: App, },
        { type: TranslateService, },
    ];
    return PageProvider;
}());
//# sourceMappingURL=page.js.map