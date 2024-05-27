let x = 5;
console.log(x);
console.log(x + 4);
let id: number = 5;
let companyname:string = "vimal";
let iscompanyopen:boolean = true;

let firstName: string = "John";
//Explicit type assignment are easier to read and more intentional.

//Implicit - TypeScript will "guess" the type, based on the assigned value:
let lasttName = "doe";

//In TS we can't change type but using /any/ we can use dynamic type
let anytype:any;
anytype = "str"
anytype = 7
console.log(anytype);

//In TS there is no float or int all are consider as numbers only 

//creating array in Ts
let ids: number[] = [1,2,2.3,3,4,5];

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);

//we can also use any method for array
let x1: any[] = [1,'array', true];

//creating a object in Ts
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

//Optional Properties

//Optional properties are properties that don't have to be defined in the object definition.

//Example without an optional property

const car1: { type: string, mileage: number } = { 
  type: "Toyota",
};

car1.mileage = 2000;

console.log(car1);

//Example with an optional property

const car2: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};

car2.mileage = 2000;

console.log(car2);

//Tuple
//A tuple is a typed array with a pre-defined length and types for each index.
let employee: [number, string, boolean] = [1,'hello',true];

let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//union
//union is used to assign more than one types in TS

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

let userinfo: string| number | boolean;

userinfo = "hello";
userinfo = 4;
console.log(userinfo);

//Enums
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
  North,
  East,
  South,
  West
};
            
let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);


// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const cars: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);