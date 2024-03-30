
function storeCarInfo(manufacturer: string, modelName: string, ...extraoption: { [key : string]: any } [] ) : 
object  {

const carInfo = {
manufacturer,
modelName,
...Object.assign({}, ...extraoption)
}

return carInfo;
};

let answare =  storeCarInfo("sportage"," honda", {color:"black"},{features: ["navigation", "power window"]})
console.log(answare);