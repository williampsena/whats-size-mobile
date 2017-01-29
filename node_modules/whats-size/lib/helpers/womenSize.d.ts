import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
/**
 * Helper class to women sizes converters
 */
export declare class WomenSize extends Size {
    /**
     * Converter to blouses sizes
     */
    blouses: ISizeConvert;
    /**
     * Converter to coats sizes
     */
    coats: ISizeConvert;
    /**
     * Converter to dresses sizes
     */
    dresses: ISizeConvert;
    /**
     * Converter to shoes sizes
     */
    shoes: ISizeConvert;
    /**
     * Converter to skirts sizes
     */
    skirts: ISizeConvert;
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string);
}
