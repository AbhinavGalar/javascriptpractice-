function love (){
    var btn = document.getElementById("demo");
 btn.style.color="red";
 btn.style.backgroundColor="green";
}

// =======================
function add(){
  var num1=parseInt(document.getElementById("input1").value);
  var num2 =parseInt(document.getElementById("input2").value);
  var result = num1+num2;
  document.getElementById("demo").innerHTML=result;
}
function substraction(){
  var num1= parseInt(document.getElementById("input1").Value);
  var num2=  parseInt(document.getElementById("input2").Value);
  var result=num1-num2;
  document.getElementById("demo").innerHTML=result;
}