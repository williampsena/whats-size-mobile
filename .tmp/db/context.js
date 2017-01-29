var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import Dexie from 'dexie';
export var DatabaseContext = (function (_super) {
    __extends(DatabaseContext, _super);
    function DatabaseContext() {
        _super.call(this, "whatsSize");
        this.version(1).stores({
            sizes: "++id,personName,sizeType,source,sizes",
            settings: "++id,lang,source"
        });
    }
    return DatabaseContext;
}(Dexie));
//# sourceMappingURL=context.js.map