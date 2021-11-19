//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }

    start() {
        if (this.fuel > 0) {
            console.log("Engine has started.");
            return this.started = true;
        } else {
            console.log("Engine cannot start.");
            return this.started = false;
        }
    }
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num
                return this.passenger
            } else {
                console.log (this.make + " " + this.model + " cannot fit all passengers.")
            }
        } else {
            console.log(this.make + " " + this.model + " is full")
        }
    }
    scheduleService(mileage){
        if (mileage > 30000) {
            this.scheduleService = true
            console.log('It is time for maintenance')
            return this.scheduleService
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)