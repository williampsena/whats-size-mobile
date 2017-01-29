import { Injectable } from '@angular/core';
import { KidsSize, MenSize, WomenSize } from "whats-size";
export var SizeOptionsProvider = (function () {
    function SizeOptionsProvider() {
    }
    SizeOptionsProvider.prototype.initialize = function (settings) {
        this.settings = settings;
        this.country = settings.source || "usa";
        this.kidsSize = new KidsSize(this.country);
        this.menSize = new MenSize(this.country);
        this.womenSize = new WomenSize(this.country);
    };
    SizeOptionsProvider.prototype.getKeys = function (data, toUpper) {
        var keys = Object.keys(data);
        if (toUpper) {
            keys = keys.map(function (x) { return x.toUpperCase(); });
        }
        return keys;
    };
    SizeOptionsProvider.prototype.getTypes = function () {
        return [
            { value: "kids", text: "SIZES.SELECT_TYPES.KIDS" },
            { value: "men", text: "SIZES.SELECT_TYPES.MEN" },
            { value: "women", text: "SIZES.SELECT_TYPES.WOMAN" }
        ];
    };
    SizeOptionsProvider.prototype.getKidsOptions = function () {
        var model = {
            all: [
                { value: "simple", text: "SIZES.SELECT_KIDS.SIMPLE" },
                { value: "clothes", text: "SIZES.SELECT_KIDS.CLOTHES" },
                { value: "shoes", text: "SIZES.SELECT_KIDS.SHOES" },
            ],
            shoes: this.getKeys(this.kidsSize.shoes.getSizes()),
            simple: this.getKeys(this.kidsSize.simple.getSizes(), true),
            clothes: this.getKeys(this.kidsSize.clothes.getSizes())
        };
        return model;
    };
    SizeOptionsProvider.prototype.getMenOptions = function () {
        return {
            all: [
                { value: "shirts", text: "Camisas" },
                { value: "shoes", text: "Sapatos" },
                { value: "simple", text: "Camisetas" },
                { value: "suits", text: "Ternos" },
            ],
            shirts: this.getKeys(this.menSize.shirts.getSizes()),
            shoes: this.getKeys(this.menSize.shoes.getSizes()),
            simple: this.getKeys(this.menSize.simple.getSizes(), true),
            suits: this.getKeys(this.menSize.suits.getSizes()),
        };
    };
    SizeOptionsProvider.prototype.getWomenOptions = function () {
        return {
            all: [
                { value: "blouses", text: "Blusas" },
                { value: "coats", text: "Casacos" },
                { value: "dresses", text: "Vestidos" },
                { value: "simple", text: "Camisetas" },
                { value: "shoes", text: "Sapatos" },
                { value: "skirts", text: "Saias" },
            ],
            blouses: this.getKeys(this.womenSize.blouses.getSizes()),
            coats: this.getKeys(this.womenSize.coats.getSizes()),
            dresses: this.getKeys(this.womenSize.dresses.getSizes()),
            simple: this.getKeys(this.womenSize.simple.getSizes(), true),
            shoes: this.getKeys(this.womenSize.shoes.getSizes()),
            skirts: this.getKeys(this.womenSize.skirts.getSizes()),
        };
    };
    SizeOptionsProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SizeOptionsProvider.ctorParameters = [];
    return SizeOptionsProvider;
}());
;
//# sourceMappingURL=options.js.map