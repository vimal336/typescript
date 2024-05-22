let x = 5;
console.log(x);
console.log(x + 4);
let id: number = 5;
let companyname:string = "vimal";
let iscompanyopen:boolean = true;

//In TS we can't change type but using /any/ we can use dynamic type
let anytype:any;
anytype = "str"
anytype = 7
console.log(anytype);