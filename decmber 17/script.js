let array1=[1,2,3,4,5,6];
console.log(array1);

let arrray2=["abhinav", "drashti","babu"];
console.log(arrray2);

const fruits =["banana","pineapple","apple","mango","guava"];
console.log(fruits);
const mixed=[1,2,3,4,"banana" ,{name:"abhinav"},[10,20,30]];
console.log(mixed[1,2]);
// console.log(mixed[2]);
console.log(mixed[2].name);
console.log(mixed[4][2]);

let flen=fruits.length;
let text=" ";
// for (let i=0; i<flen;i++){
//     text +=``
// }

// push unshift 
// push method used to add element in array at the end
// unshift method used to add elemt in array at the starting
fruits.push("dragaonfruits");
fruits.unshift("dustibun");

// pop and shift
// pop used to delete the elemt from an array at the end
// shift used to delete the elemnt from an array ait the starting  
fruits.pop("dragonfruits");
fruits.pop("mango");
fruits.shift("banana");