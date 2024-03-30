"use strict";
function storeCarInfo(manufacturer, modelName, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answare = storeCarInfo("sportage", " honda", { color: "black" }, { features: ["navigation", "power window"] });
console.log(answare);
