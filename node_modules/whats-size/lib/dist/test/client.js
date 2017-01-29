var MenSize = window.WhatsSize.MenSize;
var WomenSize = window.WhatsSize.WomenSize;
var Client = (function () {
    function Client() {
    }
    Client.prototype.getShoesSize = function (size, menSizeSelected) {
        var sizes = undefined;
        if (menSizeSelected) {
            var menSize = new MenSize("brl");
            sizes = menSize.shoes.convert(size);
        }
        else {
            var womenSize = new WomenSize("brl");
            sizes = womenSize.shoes.convert(size);
        }
        return sizes;
    };
    Client.prototype.eventGetSizeClick = function () {
        var size = document.getElementById("size").value;
        var menSizeSelected = document.getElementById("menSizeType").checked;
        var result = document.getElementById("result");
        try {
            if (size) {
                var sizes = this.getShoesSize(size, menSizeSelected);
                result.innerHTML = JSON.stringify(sizes, null, 4);
            }
        }
        catch (e) {
            result.innerHTML = JSON.stringify(e, null, 4);
        }
    };
    Client.prototype.initialize = function () {
        var convertButton = document.getElementById("convert");
        convertButton.addEventListener("click", this.eventGetSizeClick.bind(this));
    };
    return Client;
}());
;
var client = new Client();
client.initialize();
//# sourceMappingURL=client.js.map