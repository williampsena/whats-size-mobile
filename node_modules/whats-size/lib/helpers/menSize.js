"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dataSize_1 = require("./dataSize");
var size_1 = require("./size");
/**
 * Helper class to men sizes converters
 */
var MenSize = (function (_super) {
    __extends(MenSize, _super);
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    function MenSize(country) {
        var _this = _super.call(this, country) || this;
        _this.shirts = new dataSize_1.SizeConvert(_this.dataSizes.men_shirt[country]);
        _this.shoes = new dataSize_1.SizeConvert(_this.dataSizes.men_shoes[country]);
        _this.suits = new dataSize_1.SizeConvert(_this.dataSizes.men_suit[country]);
        return _this;
    }
    return MenSize;
}(size_1.Size));
exports.MenSize = MenSize;
;
//# sourceMappingURL=menSize.js.map