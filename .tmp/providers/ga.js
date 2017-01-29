import { Injectable } from "@angular/core";
export var GoogleAnalyticsProvider = (function () {
    function GoogleAnalyticsProvider() {
        this.ga = window.ga;
    }
    GoogleAnalyticsProvider.prototype.trackView = function (pageName) {
        this.ga("send", "pageview", pageName);
    };
    GoogleAnalyticsProvider.prototype.trackEvent = function (category, action, label, value) {
        this.ga("send", "event", category, action, label, value);
    };
    GoogleAnalyticsProvider.prototype.trackException = function (message, fatal) {
        if (fatal === void 0) { fatal = false; }
        this.ga("send", "exception", message, fatal);
    };
    GoogleAnalyticsProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GoogleAnalyticsProvider.ctorParameters = [];
    return GoogleAnalyticsProvider;
}());
//# sourceMappingURL=ga.js.map