declare let MenSize: any;
declare let WomenSize: any;
declare class Client {
    getShoesSize(size: string, menSizeSelected: boolean): string;
    eventGetSizeClick(): void;
    initialize(): void;
}
declare const client: Client;
