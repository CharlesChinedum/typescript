//Basic types
let myName: string = "Charles";
let id: number = 1;
let isMarried: boolean = false;
let anyType: any = "Brad";

//Union
let customerID: string | number;
customerID = "1";

//Arrays
let arr: number[] = [1, 2, 3, 4, 5];
let arrString: string[] = ["Charles", "Brad", "John"];
let arrAny: any[] = [1, "Charles"];

//Tuple
let newArr: [string, number] = ["Charles", 1];

//Tuple Array
let newArr1: [string, number][] = [["Charles", 1]];
newArr1.push(["Brad", 2]);

//Enum
enum Directions {
  Up = 1, //by default it is set to 0
  Down,
  Left,
  Right,
}

//type
type products = {
  name: string;
  id: number;
};

let product1: products = {
  name: "Egg",
  id: 3,
};

//interface
interface cars {
  brand: string;
  id: number;
  color?: string;
}

let car: cars = {
  id: 1,
  brand: "Mercedes GLE",
  color: "Green",
};

//objects

let fruit: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Mango",
};

//using types with objects
type fruits = {
  id: number;
  name: string;
};

let fruit1: fruits = {
  id: 2,
  name: "Apple",
};

//using interface with objects
interface shoes {
  id: number;
  name: string;
  color?: string;
}

let shoe1: shoes = {
  id: 1,
  name: "Jordan",
};

// type assertion
let fruitID: any = 1;
// let fruit3 = <string>fruitID;
let fruit3 = fruitID as boolean;
fruit3 = true;

//functions
const add = (x: number, y: number): number => {
  return x + y;
};

// class
class Cars {
  id: number;
  brand: string;
  color?: string;

  constructor(id: number, brand: string) {
    this.id = id;
    this.brand = brand;
  }

  setColor(color: string) {
    this.color = color;
    return `Car color has been set to ${color}`;
  }
}

let car1 = new Cars(1, "AMG");
let car2 = new Cars(2, "Rose Royse");

class carManufacturer extends Cars {
  company: string;

  constructor(id: number, brand: string, company: string) {
    super(id, brand);
    this.company = company;
  }
}

let carManufacturer1 = new carManufacturer(1, "GLE", "Mercedes");
let carManufacturer2 = new carManufacturer(1, "Corolla", "Toyota");

console.log(car1.setColor("black"));
