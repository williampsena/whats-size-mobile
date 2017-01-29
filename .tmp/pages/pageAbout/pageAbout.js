import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalyticsProvider } from '../../providers/ga';
export var PageAbout = (function () {
    function PageAbout(navCtrl, ga) {
        this.navCtrl = navCtrl;
        this.ga = ga;
        this.ga.trackView("Sobre");
    }
    PageAbout.decorators = [
        { type: Component, args: [{
                    selector: 'page-pageAbout',
                    templateUrl: 'pageAbout.html'
                },] },
    ];
    /** @nocollapse */
    PageAbout.ctorParameters = [
        { type: NavController, },
        { type: GoogleAnalyticsProvider, },
    ];
    return PageAbout;
}());
//# sourceMappingURL=pageAbout.js.map