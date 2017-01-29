"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dataSize_1 = require("./dataSize");
var size_1 = require("./size");
/**
 * Helper class to convert kids sizes
 */
var KidsSize = (function (_super) {
    __extends(KidsSize, _super);
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    function KidsSize(country) {
        var _this = _super.call(this, country) || this;
        _this.clothes = new dataSize_1.SizeConvert(_this.dataSizes.kids_clothes[country]);
        _this.shoes = new dataSize_1.SizeConvert(_this.dataSizes.kids_shoes[country]);
        return _this;
    }
    return KidsSize;
}(size_1.Size));
exports.KidsSize = KidsSize;
;
//# sourceMappingURL=kidsSize.js.map