// copies array elemnts into objects
// copies array elemnts into another array
const number =[10,20,30,40,50];
const num2= [...number];
console.log(num2);

// string
let bio=[
    name="abhinav",
    age="19",
    city="mumbai",
]
let name2=[...bio];
console.log(name2);


// rest parameter (...)
// used im=n the function parameter to
 function display(...a){
 console.log(a);
 }
 display(10);


