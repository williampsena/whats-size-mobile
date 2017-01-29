import { TranslateService } from 'ng2-translate';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PageProvider } from "../../providers/page";
export var PageSizeView = (function () {
    function PageSizeView(navCtrl, navParams, translate, page) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.page = page;
        this.model = {
            entity: null
        };
        this.loadModel();
    }
    PageSizeView.prototype.loadModel = function () {
        this.model.entity = this.navParams.get('model');
    };
    PageSizeView.prototype.goHome = function () {
        this.page.goHome();
    };
    PageSizeView.decorators = [
        { type: Component, args: [{
                    selector: "page-pageSizeView",
                    templateUrl: "pageSizeView.html"
                },] },
    ];
    /** @nocollapse */
    PageSizeView.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: TranslateService, },
        { type: PageProvider, },
    ];
    return PageSizeView;
}());
//# sourceMappingURL=pageSizeView.js.map