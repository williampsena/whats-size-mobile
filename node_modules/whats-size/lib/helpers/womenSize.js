"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dataSize_1 = require("./dataSize");
var size_1 = require("./size");
/**
 * Helper class to women sizes converters
 */
var WomenSize = (function (_super) {
    __extends(WomenSize, _super);
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    function WomenSize(country) {
        var _this = _super.call(this, country) || this;
        _this.blouses = new dataSize_1.SizeConvert(_this.dataSizes.women_blouse[country]);
        _this.coats = new dataSize_1.SizeConvert(_this.dataSizes.women_coats_dress[country]);
        _this.dresses = new dataSize_1.SizeConvert(_this.dataSizes.women_coats_dress[country]);
        _this.shoes = new dataSize_1.SizeConvert(_this.dataSizes.women_shoes[country]);
        _this.skirts = new dataSize_1.SizeConvert(_this.dataSizes.women_coats_dress[country]);
        return _this;
    }
    return WomenSize;
}(size_1.Size));
exports.WomenSize = WomenSize;
;
//# sourceMappingURL=womenSize.js.map