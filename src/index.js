var x = 5;
console.log(x);
console.log(x + 4);
var id = 5;
var companyname = "vimal";
var iscompanyopen = true;
var firstName = "John";
//Explicit type assignment are easier to read and more intentional.
//Implicit - TypeScript will "guess" the type, based on the assigned value:
var lasttName = "doe";
//In TS we can't change type but using /any/ we can use dynamic type
var anytype;
anytype = "str";
anytype = 7;
console.log(anytype);
//In TS there is no float or int all are consider as numbers only 
//creating array in Ts
var ids = [1, 2, 2.3, 3, 4, 5];
var names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
//we can also use any method for array
var x1 = [1, 'array', true];
//creating a object in Ts
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
//Optional Properties
//Optional properties are properties that don't have to be defined in the object definition.
//Example without an optional property
var car1 = {
    type: "Toyota"
};
car1.mileage = 2000;
console.log(car1);
//Example with an optional property
var car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);
//Tuple
//A tuple is a typed array with a pre-defined length and types for each index.
var employee = [1, 'hello', true];
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
//union
//union is used to assign more than one types in TS
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
var userinfo;
userinfo = "hello";
console.log(userinfo);
