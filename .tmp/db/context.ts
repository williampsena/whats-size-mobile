import Dexie from 'dexie';
import { ISize } from './size';
import { ISettings } from './settings';

export class DatabaseContext extends Dexie {
    public sizes: Dexie.Table<ISize, number>;
    public settings: Dexie.Table<ISettings, number>;

    constructor() {
        super("whatsSize");

        this.version(1).stores({
            sizes: "++id,personName,sizeType,source,sizes",
            settings: "++id,lang,source"
        });
    }
}