"use strict";
//Basic types
let myName = "Charles";
let id = 1;
let isMarried = false;
let anyType = "Brad";
//Union
let customerID;
customerID = "1";
//Arrays
let arr = [1, 2, 3, 4, 5];
let arrString = ["Charles", "Brad", "John"];
let arrAny = [1, "Charles"];
//Tuple
let newArr = ["Charles", 1];
//Tuple Array
let newArr1 = [["Charles", 1]];
newArr1.push(["Brad", 2]);
//Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
    Directions[Directions["Right"] = 4] = "Right";
})(Directions || (Directions = {}));
let product1 = {
    name: "Egg",
    id: 3,
};
let car = {
    id: 1,
    brand: "Mercedes GLE",
    color: "Green",
};
//objects
let fruit = {
    id: 1,
    name: "Mango",
};
let fruit1 = {
    id: 2,
    name: "Apple",
};
let shoe1 = {
    id: 1,
    name: "Jordan",
};
// type assertion
let fruitID = 1;
// let fruit3 = <string>fruitID;
let fruit3 = fruitID;
fruit3 = true;
//functions
const add = (x, y) => {
    return x + y;
};
// class
class Cars {
    constructor(id, brand) {
        this.id = id;
        this.brand = brand;
    }
    setColor(color) {
        this.color = color;
        return `Car color has been set to ${color}`;
    }
}
let car1 = new Cars(1, "AMG");
let car2 = new Cars(2, "Rose Royse");
class carManufacturer extends Cars {
    constructor(id, brand, company) {
        super(id, brand);
        this.company = company;
    }
}
let carManufacturer1 = new carManufacturer(1, "GLE", "Mercedes");
let carManufacturer2 = new carManufacturer(1, "Corolla", "Toyota");
console.log(car1.setColor("black"));
