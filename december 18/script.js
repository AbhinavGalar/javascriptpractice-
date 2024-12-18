const fruits=["orange","mango","kiwi","banana"];
fruits.sort();
console.log(fruits);

const number=[100,10000,400,200,50];
number.sort(function(a,b){
    return a-b;
});
console.log(number);
number.reverse();
console.log(number)

// convert array elemt into string 
const  newfruits= fruits.toString();
console.log(newfruits);
console.log(newfruits,typeof(newfruits));

// to join the array elemnts into 
// and to give space betnween an string
const joinedarray=fruits.join("*");
console.log(joinedarray);


const student =[
    {name:"abhinav",course:"fullstack",city:"bhopal"},
    {name:"drashti",course:"fullstack",city:"bhopal"},
    {name:"rajiv",course:"fullstack",city:"itasi"},
    {name:"parineeta",course:"fullstack",city:"itarsi"},
    {name:"sudhanshu",course:"fullstack",city:"zuzharpur"},
    {name:"ritika",course:"fullstack",city:"zuzaharpur"},


];
function display(){
    let table =`
    <table border "10px", width="5px", color="red", bgcolor="green">
    <tr>
    <th>name</th>
    <th>course</th>
    <th>city</th>
    `;

student.map(function (y){
    table +=`
    <tr>
    <td>${y.name}</td>
    <td>${y.course}</td>
    <td>${y.city}</td>
    `
})
table +="</table>";
document.getElementById("demo").innerHTML=table;
}