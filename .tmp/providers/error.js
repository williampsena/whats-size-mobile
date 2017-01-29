import { Injectable } from "@angular/core";
import { GoogleAnalyticsProvider } from './ga';
export var AppErrorHandler = (function () {
    function AppErrorHandler(ga) {
        this.ga = ga;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        this.ga.trackException(error.message || JSON.stringify(error));
    };
    AppErrorHandler.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppErrorHandler.ctorParameters = [
        { type: GoogleAnalyticsProvider, },
    ];
    return AppErrorHandler;
}());
//# sourceMappingURL=error.js.map