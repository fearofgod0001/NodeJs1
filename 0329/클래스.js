class Vehicle {
    constructor(maker, model, year, color){
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    getMaker(){
        return this.maker;
    }
    getModel(){
        return this.model;
    }
    getYear(){
        return this.year;
    }
    getColor(){
        return this.color;
    }
    getSpeed(){
        return this.speed;
    }
    accelerate(amount){
        this.speed += amount;
        console.log(`The ${this.maker} ${this.model} is now going ${this.speed} km/h. `)
    }
    break(amount){
        this.speed = Math.max(0, this.speed - amount);
        console.log(`The ${this.maker} ${this.model} is now going ${this.speed} km/h. `)
    }
    static getNumberOfWheel(){
        return 0;
    }
}

class Car extends Vehicle{
    constructor(maker, model, year, color, numDoors){
        super(maker, model, year, color);
        this.numDoors = numDoors;        
    }
    getNumDoors(){
        return this.numDoors;
    }
    static getNumberOfWheel(){
        return 4;
    }
}

class Truck extends Vehicle{
    constructor(maker,model,year,color,towingCapacity){
        super(maker,model,year,color);
        this.towingCapacity=towingCapacity;
    }
    getTowingCapacity(){
        return this.towingCapacity;
    }
    static getNumberOfWheel(){
        return 6;
    }
}

const myCar = new Car("현대","소나타","2022","레드",5);
console.log(myCar);
console.log(myCar.getModel());
myCar.accelerate(30);
myCar.break(10);
console.log(Car.getNumberOfWheel());


const myTruck = new Truck("현대차","봉고",2021,"화이트",1000);

console.log(myTruck.getModel());
console.log(myTruck.getTowingCapacity());
myTruck.accelerate(30);
myTruck.break(10);
console.log(Truck.getNumberOfWheel());