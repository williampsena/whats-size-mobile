import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
import Dexie from 'dexie';

export interface ISettings {
    /**
     * Unique identifier
     */
    id?: number;
    /**
     * Language
     */
    lang: string;
    /**
     * Source
     */
    source: string;
};

export class SettingsModel implements ISettings {
    public id?: number;

    public lang: string;

    public source: string;

    constructor(args: any) {
        args = args || {};

        this.id = args.id;
        this.lang = args.lang;
        this.source = args.source;
    }
};

export interface ISettingsStore {
    /**
     * Get count of person sizes
     *
     * @returns Promise<Number>
     */
    count(): Dexie.Promise<number>;

    /**
     * Create a setting
     *
     * @param setting Setting model
     * @return Promise<any> model with details
     */
    create(setting: ISettings): Dexie.Promise<any>;

    /**
     * Update a person sizes
     *
     * @param setting Object with fields to update
     * @return Promise<any> model with details
     */
    update(setting: any): Dexie.Promise<any>;

    /**
     * Delete a person sizes
     *
     * @param id Number unique identifier
     * @return Promise<any> model with details
     */
    delete(id: number): Dexie.Promise<any>;

    /**
     * Get setting
     *
     * @return Promise<ISettings> with settings
     */
    get(): Dexie.Promise<ISettings>;
};

/**
 * Size store
 */
@Injectable()
export class SettingsStore implements ISettingsStore {
    constructor(public db: DatabaseContext) {

    }

    count(): Dexie.Promise<number> {
        return this.db.sizes.count();
    }

    create(setting: ISettings): Dexie.Promise<any> {
        delete setting.id;

        return this.db.settings.add(setting);
    }

    update(setting: any): Dexie.Promise<any> {
        var settingUpdate = Object.assign({}, setting);

        delete settingUpdate.id;

        return this.db.settings.update(setting.id, settingUpdate);
    }

    delete(id: number): Dexie.Promise<any> {
        return this.db.settings.delete(id);
    }

    get(): Dexie.Promise<ISettings> {
        return this.db.settings.toCollection().first();
    }
}
