import { ISizeConvert } from "./dataSize";
/**
 * Base helper class to size converters
 */
export declare abstract class Size {
    /**
     * Converter to simples sizes (s, m, x, xxl, ...)
     */
    simple: ISizeConvert;
    protected dataSizes: any;
    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string);
    /**
     * Get all data sizes
     *
     * @returns Object with all data sizes
     */
    getDataSizes(): any;
}
