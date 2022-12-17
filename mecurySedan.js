//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let Mercury = new Vehicle ("Ford", "A28 Mercury Sedan", "2022", "Green", "10000");

console.log(Mercury);

Mercury.start(10);

Mercury.accelerate(160);

Mercury.typeOfVehicle(4);
