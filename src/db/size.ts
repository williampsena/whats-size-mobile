import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
import Dexie from 'dexie';

export interface ISize {
    /**
     * Unique identifier
     */
    id?: number;
    /**
     * Person name
     */
    personName: string;
    /**
     * Size type
     */
    sizeType: string;
    /**
     * Source (BRL, USA, EUR)
     */
    source: string;
    /**
     * Model with sizes
     */
    sizes: Array<any>;
};

export class SizeModel implements ISize {
    public id?: number;

    public personName: string;

    public sizeType: string;

    public source: string;

    public sizes: Array<{
        key: string,
        value: string
    }>;

    constructor(args: any) {
        args = args || {};

        this.id = args.id;
        this.personName = args.personName;
        this.sizeType = args.sizeType;
        this.source = args.source;
        this.sizes = args.sizes;
    }
};

export interface ISizeStore {
    /**
     * Get count of person sizes
     *
     * @returns Promise<Number>
     */
    count(): Dexie.Promise<number>;

    /**
     * Create a person sizes
     *
     * @param ISize size model
     * @return Promise<any> model with details
     */
    create(size: ISize): Dexie.Promise<any>;

    /**
     * Update a person sizes
     *
     * @param Object with fields to update
     * @return Promise<any> model with details
     */
    update(size: any): Dexie.Promise<any>;

    /**
     * Delete a person sizes
     *
     * @param Number unique identifier
     * @return Promise<any> model with details
     */
    delete(id: number): Dexie.Promise<any>;

    /**
     * Get all sizes
     *
     * @return Promise<Array> with all sizes
     */
    all(): Dexie.Promise<ISize[]>;
};

/**
 * Size store
 */
@Injectable()
export class SizeStore implements ISizeStore {
    constructor(public db: DatabaseContext) {

    }

    count(): Dexie.Promise<number> {
        return this.db.sizes.count();
    }

    create(size: ISize): Dexie.Promise<any> {
        delete size.id;

        return this.db.sizes.add(size);
    }

    update(size: any): Dexie.Promise<any> {
        var sizeUpdate = Object.assign({}, size);

        delete sizeUpdate.id;

        return this.db.sizes.update(size.id, sizeUpdate);
    }

    delete(id: number): Dexie.Promise<any> {
        return this.db.sizes.delete(id);
    }

    all(): Dexie.Promise<ISize[]> {
        return this.db.sizes.toArray();
    }
}
