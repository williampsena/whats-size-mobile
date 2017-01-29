import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
import { SizeStore } from './size';
import { SettingsStore } from './settings';
export var WhatsSizeDatabase = (function () {
    function WhatsSizeDatabase() {
        if (!WhatsSizeDatabase._db) {
            WhatsSizeDatabase._db = new DatabaseContext();
        }
        this.db = WhatsSizeDatabase._db;
        this.stores = {
            sizes: new SizeStore(this.db),
            settings: new SettingsStore(this.db)
        };
    }
    WhatsSizeDatabase.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WhatsSizeDatabase.ctorParameters = [];
    return WhatsSizeDatabase;
}());
//# sourceMappingURL=component.js.map