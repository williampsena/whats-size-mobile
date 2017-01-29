import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { WhatsSizeApp } from './app.component';
import { PageHome } from '../pages/pageHome/pageHome';
import { PageSizes } from '../pages/pageSizes/pageSizes';
import { PageSizeView } from '../pages/pageSizeView/pageSizeView';
import { PageSizeForm } from '../pages/pageSizeForm/pageSizeForm';
import { PageSearch } from '../pages/pageSearch/pageSearch';
import { PageAbout } from '../pages/pageAbout/pageAbout';
import { PageSettings } from '../pages/pageSettings/pageSettings';
import { WhatsSizeDatabase } from '../db/component';
import { SizeProvider } from '../providers/size';
import { SizeOptionsProvider } from '../providers/options';
import { PageProvider } from '../providers/page';
import { GoogleAnalyticsProvider } from '../providers/ga';
import { SizeView } from '../pages/pageSizeView/components/sizeView';
import { AppErrorHandler } from '../providers/error';
import { CacheService } from "ionic-cache/ionic-cache";
export function createTranslateLoader(http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        WhatsSizeApp,
                        SizeView,
                        PageHome,
                        PageSizes,
                        PageSizeView,
                        PageSizeForm,
                        PageSearch,
                        PageAbout,
                        PageSettings
                    ],
                    imports: [
                        FormsModule,
                        HttpModule,
                        TranslateModule.forRoot({
                            provide: TranslateLoader,
                            useFactory: (createTranslateLoader),
                            deps: [Http]
                        }),
                        IonicModule.forRoot(WhatsSizeApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        WhatsSizeApp,
                        PageHome,
                        PageSizes,
                        PageSizeView,
                        PageSizeForm,
                        PageSearch,
                        PageAbout,
                        PageSettings
                    ],
                    providers: [CacheService, { provide: ErrorHandler, useClass: AppErrorHandler }, WhatsSizeDatabase, SizeProvider, SizeOptionsProvider, PageProvider, GoogleAnalyticsProvider]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map