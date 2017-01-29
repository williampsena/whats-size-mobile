"use strict";
var dataSize_1 = require("./dataSize");
var dataSizes = require("../db/sizes.json");
/**
 * Base helper class to size converters
 */
var Size = (function () {
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    function Size(country) {
        country = country.toLowerCase();
        this.dataSizes = dataSizes;
        this.simple = new dataSize_1.SizeConvert(this.dataSizes.simple[country]);
    }
    /**
     * Get all data sizes
     *
     * @returns Object with all data sizes
     */
    Size.prototype.getDataSizes = function () {
        return this.dataSizes;
    };
    return Size;
}());
exports.Size = Size;
;
//# sourceMappingURL=size.js.map