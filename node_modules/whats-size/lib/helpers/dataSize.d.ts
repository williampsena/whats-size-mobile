/**
 * Common interface to convert sizes
 */
export interface ISizeConvert {
    /**
     * Convert size country source to target (example: BRL to USA)
     * @param size Size as string
     */
    convert(size: string): any;
    /**
     * Get all sizes by type
     *
     * @returns Object with all sizes by type
     */
    getSizes(): any;
}
/**
 * Base class to convert sizes
 */
export declare class SizeConvert implements ISizeConvert {
    private sizes;
    /**
     * Default constructor
     * @param sizes  Contains object with specific sizes of type (clothes, shoes)
     */
    constructor(sizes: any);
    /**
     * Convert size to other country sizes
     *
     * @param size A size to be converted
     * @returns Object with global sizes
     */
    convert(size: string): any;
    /**
     * Get all sizes by type
     *
     * @returns Object with all sizes by type
     */
    getSizes(): any;
}
