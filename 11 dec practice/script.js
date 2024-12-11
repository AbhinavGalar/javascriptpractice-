let name ="  abhinav galar  ";
let trimmedText= name.trim();
// trim method is used to remove white method from the string 
console.log(trimmedText);

// spliting a string into array
const data="this is javascript work"
const splitteData=data.slice(" ");
console.log(splitteData);

// slice method extracts the part of the string ,it takes two parameters  ,ending position is not included
// at the strating of a string and the ending of a string

const bio="this is by using slice method in javascript";
let newData = bio.slice(0,3);
console.log(newData);


// substring
// substring is similar to slice but it cannot take negative parameters 
// 
const text="this is javascript";
let newText=text.substring(0,4);
console.log(newText);
// replace 
// replace method is used to replace word from string 

const word="javascript is easy but cpp is hard";
let newWord= word.replace("cpp","css");
console.log(newWord);