import { Injectable } from '@angular/core';
export var SizeViewModel = (function () {
    function SizeViewModel(args) {
        args = args || {};
        this.text = args.text || "";
        this.value = args.value || "";
        this.flag = args.flag || "";
    }
    return SizeViewModel;
}());
export var SizeProvider = (function () {
    function SizeProvider() {
    }
    SizeProvider.prototype.convertToSizeModel = function (size) {
        var sizes = new Array();
        Object.keys(size).sort().forEach(function (key) {
            var sizeValue = size[key];
            sizes.push(new SizeViewModel({
                text: key.toUpperCase(),
                value: sizeValue,
                flag: "assets/icon/flags/" + key + ".svg"
            }));
        });
        return sizes;
    };
    SizeProvider.prototype.getSizeValues = function (models) {
        return models.map(function (x) {
            return { key: x.key, value: x.value };
        });
    };
    SizeProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SizeProvider.ctorParameters = [];
    return SizeProvider;
}());
//# sourceMappingURL=size.js.map