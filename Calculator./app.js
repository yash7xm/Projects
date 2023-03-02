const btn = document.querySelector('table');
const input = document.querySelector('.input-txt');
const inp = document.querySelector('form');
let str="";

btn.addEventListener('click',add);

function add(e){
  if(e.target.innerText == "="){
    calculate(str);
  } 
  else if(e.target.innerText == "C"){
    input.innerText="0";
    str="";
  } 
  else {
    str=str.concat(e.target.innerText);
    input.innerText=str;
  }
}

function calculate(event){
  input.innerText="";
  try {
    input.innerText=eval(event);
  }
  catch (error){
    input.innerText="Invalid Expression";
  }
}
