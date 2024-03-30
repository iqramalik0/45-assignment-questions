//making a function
function describe_city(city: string, country:string = "default country"){
    console.log(`${city} is in ${country}`);
}


//three different cities functions
describe_city("newyork","america");

describe_city(" bali", "malaysia");

describe_city("shinghai");