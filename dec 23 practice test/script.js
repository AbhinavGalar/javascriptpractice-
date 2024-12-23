const name="abhinav galar is a very genuine person and he is very honest with his work";
const name2= name.trim();
console.log(name2);
// removes white spacec from both side of a string

const text1="abhinav galar is a very genuine person and he is very honest with his work";
const splitedtext= text1.split();
console.log(splitedtext);
// split method converts string into array

const text2="abhinav galar is a very genuine person and he is very honest with his work";
const  slicedtext=text2.slice(2,5);
console.log(slicedtext);
// slice method used  to extract part of a string  

// substring method is same 2 slice but it cannot takes negative value 
// 2 nd parameter is lenght 
const text3="abhinav galar is a very genuine person and he is very honest with his work";
const somethingnew= text3.substring(0,6);
console.log(somethingnew);


const newname="abhinav galar is a very genuine person and he is very honest Galar with his work";
const someththingreplce= newname.replace(/galar/ig,"verma");
console.log(someththingreplce);