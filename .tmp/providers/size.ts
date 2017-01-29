import { Injectable } from '@angular/core';

export class SizeViewModel {
    public text: string;
    public value: string;
    public flag: string;

    constructor(args: any) {
        args = args || {};

        this.text = args.text || "";
        this.value = args.value || "";
        this.flag = args.flag || "";
    }
}


@Injectable()
export class SizeProvider {
    constructor() {
    }

    public convertToSizeModel(size: any): Array<SizeViewModel> {
        var sizes = new Array<SizeViewModel>();

        Object.keys(size).sort().forEach(key => {
            var sizeValue = size[key];

            sizes.push(new SizeViewModel(
                {
                    text: key.toUpperCase(),
                    value: sizeValue,
                    flag: `assets/icon/flags/${key}.svg`
                })
            );
        });

        return sizes;
    }

    public getSizeValues(models: Array<any>) {
        return models.map(x => {
            return { key: x.key, value: x.value };
        });
    }
}
