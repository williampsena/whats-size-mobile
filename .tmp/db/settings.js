import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
;
export var SettingsModel = (function () {
    function SettingsModel(args) {
        args = args || {};
        this.id = args.id;
        this.lang = args.lang;
        this.source = args.source;
    }
    return SettingsModel;
}());
;
;
/**
 * Size store
 */
export var SettingsStore = (function () {
    function SettingsStore(db) {
        this.db = db;
    }
    SettingsStore.prototype.count = function () {
        return this.db.sizes.count();
    };
    SettingsStore.prototype.create = function (setting) {
        delete setting.id;
        return this.db.settings.add(setting);
    };
    SettingsStore.prototype.update = function (setting) {
        var settingUpdate = Object.assign({}, setting);
        delete settingUpdate.id;
        return this.db.settings.update(setting.id, settingUpdate);
    };
    SettingsStore.prototype.delete = function (id) {
        return this.db.settings.delete(id);
    };
    SettingsStore.prototype.get = function () {
        return this.db.settings.toCollection().first();
    };
    SettingsStore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SettingsStore.ctorParameters = [
        { type: DatabaseContext, },
    ];
    return SettingsStore;
}());
//# sourceMappingURL=settings.js.map