import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
;
export var SizeModel = (function () {
    function SizeModel(args) {
        args = args || {};
        this.id = args.id;
        this.personName = args.personName;
        this.sizeType = args.sizeType;
        this.source = args.source;
        this.sizes = args.sizes;
    }
    return SizeModel;
}());
;
;
/**
 * Size store
 */
export var SizeStore = (function () {
    function SizeStore(db) {
        this.db = db;
    }
    SizeStore.prototype.count = function () {
        return this.db.sizes.count();
    };
    SizeStore.prototype.create = function (size) {
        delete size.id;
        return this.db.sizes.add(size);
    };
    SizeStore.prototype.update = function (size) {
        var sizeUpdate = Object.assign({}, size);
        delete sizeUpdate.id;
        return this.db.sizes.update(size.id, sizeUpdate);
    };
    SizeStore.prototype.delete = function (id) {
        return this.db.sizes.delete(id);
    };
    SizeStore.prototype.all = function () {
        return this.db.sizes.toArray();
    };
    SizeStore.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SizeStore.ctorParameters = [
        { type: DatabaseContext, },
    ];
    return SizeStore;
}());
//# sourceMappingURL=size.js.map