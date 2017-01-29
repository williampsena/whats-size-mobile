import { Injectable } from '@angular/core';
import { DatabaseContext } from './context';
import { ISizeStore, SizeStore } from './size';
import { ISettingsStore, SettingsStore } from './settings';

@Injectable()
export class WhatsSizeDatabase {
    private static _db: DatabaseContext;
    public db: DatabaseContext;
    public stores: {
        sizes: ISizeStore,
        settings: ISettingsStore
    };

    constructor() {
        if (!WhatsSizeDatabase._db) {
            WhatsSizeDatabase._db = new DatabaseContext();
        }

        this.db = WhatsSizeDatabase._db;

        this.stores = {
            sizes: new SizeStore(this.db),
            settings: new SettingsStore(this.db)
        };
    }
}
