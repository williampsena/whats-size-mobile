import { Injectable } from '@angular/core';

import { KidsSize, MenSize, WomenSize } from "whats-size";

import { ISettings } from '../db/settings';

@Injectable()
export class SizeOptionsProvider {
    kidsSize: KidsSize;
    menSize: MenSize;
    womenSize: WomenSize;
    country: string;
    settings: ISettings;

    constructor() {

    }

    initialize(settings: ISettings) {
        this.settings = settings;
        this.country = settings.source || "usa";
        this.kidsSize = new KidsSize(this.country);
        this.menSize = new MenSize(this.country);
        this.womenSize = new WomenSize(this.country);
    }

    private getKeys(data: any, toUpper?: boolean): Array<any> {
        var keys = Object.keys(data);

        if (toUpper) {
            keys = keys.map(x => x.toUpperCase());
        }

        return keys;
    }

    getTypes(): Array<any> {
        return [
            { value: "kids", text: "SIZES.SELECT_TYPES.KIDS" },
            { value: "men", text: "SIZES.SELECT_TYPES.MEN" },
            { value: "women", text: "SIZES.SELECT_TYPES.WOMAN" }
        ];
    }

    getKidsOptions() {
        var model = {
            all: [
                { value: "simple", text: "SIZES.SELECT_KIDS.SIMPLE" },
                { value: "clothes", text: "SIZES.SELECT_KIDS.CLOTHES" },
                { value: "shoes", text: "SIZES.SELECT_KIDS.SHOES" },
            ],
            shoes: this.getKeys(this.kidsSize.shoes.getSizes()),
            simple: this.getKeys(this.kidsSize.simple.getSizes(), true),
            clothes: this.getKeys(this.kidsSize.clothes.getSizes())
        };

        return model;
    }

    getMenOptions() {
        return {
            all: [
                { value: "shirts", text: "Camisas" },
                { value: "shoes", text: "Sapatos" },
                { value: "simple", text: "Camisetas" },
                { value: "suits", text: "Ternos" },
            ],
            shirts: this.getKeys(this.menSize.shirts.getSizes()),
            shoes: this.getKeys(this.menSize.shoes.getSizes()),
            simple: this.getKeys(this.menSize.simple.getSizes(), true),
            suits: this.getKeys(this.menSize.suits.getSizes()),
        };
    }

    getWomenOptions() {
        return {
            all: [
                { value: "blouses", text: "Blusas" },
                { value: "coats", text: "Casacos" },
                { value: "dresses", text: "Vestidos" },
                { value: "simple", text: "Camisetas" },
                { value: "shoes", text: "Sapatos" },
                { value: "skirts", text: "Saias" },
            ],
            blouses: this.getKeys(this.womenSize.blouses.getSizes()),
            coats: this.getKeys(this.womenSize.coats.getSizes()),
            dresses: this.getKeys(this.womenSize.dresses.getSizes()),
            simple: this.getKeys(this.womenSize.simple.getSizes(), true),
            shoes: this.getKeys(this.womenSize.shoes.getSizes()),
            skirts: this.getKeys(this.womenSize.skirts.getSizes()),
        };
    }
};