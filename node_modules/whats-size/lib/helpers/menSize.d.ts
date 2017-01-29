import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
/**
 * Helper class to men sizes converters
 */
export declare class MenSize extends Size {
    /**
     * Converter to suits sizes
     */
    suits: ISizeConvert;
    /**
     * Converter to shirts sizes
     */
    shirts: ISizeConvert;
    /**
     * Converter to shoes sizes
     */
    shoes: ISizeConvert;
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string);
}
