let x = 5;
console.log(x);
console.log(x + 4);
let id: number = 5;
let companyname: string = "vimal";
let iscompanyopen: boolean = true;

//TS primitive types 1.number, 2.string, 3.boolean

let firstName: string = "John";
//Explicit type assignment are easier to read and more intentional.

//Implicit - TypeScript will "guess" the type, based on the assigned value:
let lasttName = "doe";

//In TS we can't change type but using /any/ we can use dynamic type
let anytype: any;
anytype = "str";
anytype = 7;
console.log(anytype);

//In TS there is no float or int all are consider as numbers only

//creating array in Ts
let ids: number[] = [1, 2, 2.3, 3, 4, 5];
let subject: string[] = ["tamil", "english"];

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);

//we can also use any method for array
let x1: any[] = [1, "array", true];

//creating a object in Ts
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

const details: { name: string; id: number } = {
  name: "ravi",
  id: 20,
};

//array of objects

const emp: { ename: string|null|undefined; eid: number; ispresent: boolean; role: string }[] =
  [
    {
      ename:undefined,
      eid: 10,
      ispresent: true,
      role: "developer",
    },
    {
      ename: "ram",
      eid: 10,
      ispresent: true,
      role: "developer",
    },
  ];

console.log(emp[0]);

//Type

//implementing types in typescript

type studtype = { sname: string; sid: number; ispresent: boolean; std: number }

const students: studtype[] =
  [
    {
      sname: "ram",
      sid: 10,
      ispresent: true,
      std: 5,
    },
    {
      sname: "ram",
      sid: 11,
      ispresent: true,
      std: 4,
    },
  ];

console.log(students[0]);

//Type Assertions

//Type assertions instruct the compiler to treat a value as a specified type. 

let studetails = students as studtype[];

//another way to use type assertion

let studetails2 = <studtype[]>students;

console.log( studetails[0].sid);
console.log( studetails2[1].sid);


//non null type assertions

//If you are certain that the element with the given ID exists, 
//you can use the non-null assertion operator to simplify the code.

//function updateElementText(id: string, newText: string): void {
  //const element = document.getElementById(id)!; // Non-null assertion
  //element.textContent = newText;}

//updateElementText("myElement", "Hello, world!");


//Optional properties 

//In TypeScript, you can define optional properties in interfaces and type aliases using a question mark (?). 
//This indicates that the property is not required and can be undefined

type optionaluser = {
  optionalname?: string;
  optionalid?: number;
}

let optional: optionaluser = {
  optionalname : "arun",
  optionalid : 10
}

//Optional Properties

//Optional properties are properties that don't have to be defined in the object definition.

//Example without an optional property

const car1: { type: string; mileage: number } = {
  type: "Toyota",
};

car1.mileage = 2000;

console.log(car1);

//Example with an optional property

const car2: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};

car2.mileage = 2000;

console.log(car2);

//Tuple
//A tuple is a typed array with a pre-defined length and types for each index.
let employee: [number, string, boolean] = [1, "hello", true];

//type for array
type typearray=[number, string, boolean]
let employee3: typearray = [1, "hello", true];

//array
let employee1: number[] = [1, 1, 1];


let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];

//union
//union is used to assign more than one types in TS

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

let userinfo: string | number | boolean;

userinfo = "hello";
userinfo = 4;
console.log(userinfo);

//Enums
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);

// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const cars: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);

//--------------------typescript function----------------------------//

// the `: number` here specifies that this function returns a number

function add(num: number) {
  return num + 2;
}

console.log(add(4));
console.log(add("4"));

//The type void can be used to indicate a function doesn't return any value.

function printany(): void {
  console.log(6);
}
printany();

//function explicit string

function changeupper(str: string) {
  console.log(str.toUpperCase());
}

changeupper("uppercase");

//function default name

function changelower(lower: string="LOWERCASE") {
  console.log(lower.toLowerCase());
}

changelower();

//OPTIONAL PARAMETER (?) should be assign in last

//function inside object

function funcobj({name:string,age:number}){

}

funcobj({name:"ravi",age:20})


function createUser({name: string, isPaid: boolean}){
  return{name:"vimal",isPaid:false}
}

createUser({name: "hitesh", isPaid: false})


function createUser1({ name, isPaid }: { name: string; isPaid: boolean }): { name: string; isPaid: boolean } {
  return { name: "vimal", isPaid: false };
}

const user = createUser1({ name: "hitesh", isPaid: false });
console.log(user); // Output: { name: "vimal", isPaid: false }


//rest parameter

function restpara(...rest:string[]){
   return rest
}

console.log("a","b","c","d")


//---------------------------Typescript classes-------------------------------------//


class Animal {
  name1:string
  age2:number
  email3:number|string
  constructor(name, age, email) {
    this.name1 = name;
    this.age2 = age;
    this.email3 = email;
  }

  speak() {
    console.log(`${this.name1} makes a noise`);
  }
}

// Derived class (Child)

class Tiger extends Animal {
  static animalCount = 0;
  breed:string
  constructor(name1,name2,name3,breed) {
    super(name1, name2, name3);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name1} barks ${this.age2} contact id : ${this.email3}`);
  }
  static animalnumber() {
      console.log(Tiger.animalCount++); //static method
    }
}

const dog1 = new Tiger("alabai",22, "dubai", "breed");
const dog2 = new Animal("tiger",4,"ROAR");
console.log(dog2);
console.log(dog1.email3);
dog1.speak();
Tiger.animalnumber();

const dog4 = new Tiger("dog",2,"hello","b");

console.log(dog4);

Tiger.animalnumber();
Tiger.animalnumber();
Tiger.animalnumber();

//---------------------------------------------------------//
