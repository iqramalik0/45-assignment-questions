//making a function
function describe_city(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country));
}
//three different cities functions
describe_city("newyork", "america");
describe_city(" bali", "malaysia");
describe_city("shinghai");
