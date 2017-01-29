import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
/**
 * Helper class to convert kids sizes
 */
export declare class KidsSize extends Size {
    /**
     * Converter to clothes sizes
     */
    clothes: ISizeConvert;
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
