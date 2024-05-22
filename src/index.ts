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

Example without an optional property
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
Example with an optional property
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;

console.log(car);

//Tuple
//A tuple is a typed array with a pre-defined length and types for each index.
let employee: [number, string, boolean] = [1,'hello',true];

let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//union
//union is used to assign more than one types in TS







