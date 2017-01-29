let MenSize = (<any> window).WhatsSize.MenSize;
let WomenSize = (<any> window).WhatsSize.WomenSize;

class Client {
    public getShoesSize(size: string, menSizeSelected: boolean) {
        let sizes: string = undefined;

        if (menSizeSelected) {
            let menSize = new MenSize("brl");
            sizes = menSize.shoes.convert(size);
        } else {
            let womenSize = new WomenSize("brl");
            sizes = womenSize.shoes.convert(size);
        }

        return sizes;
    }

    public eventGetSizeClick() {
        let size = (document.getElementById("size") as HTMLInputElement).value;
        let menSizeSelected = (document.getElementById("menSizeType") as HTMLInputElement).checked;
        let result = document.getElementById("result") as HTMLDivElement;

        try {
            if (size) {
                let sizes = this.getShoesSize(size, menSizeSelected);
                result.innerHTML = JSON.stringify(sizes, null, 4);
            }
        } catch (e) {
            result.innerHTML = JSON.stringify(e, null, 4);
        }
    }

    public initialize() {
        let convertButton = document.getElementById("convert") as HTMLButtonElement;
        convertButton.addEventListener("click", this.eventGetSizeClick.bind(this));
    }
};

const client = new Client();
client.initialize();
