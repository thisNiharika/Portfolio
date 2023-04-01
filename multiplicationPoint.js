const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
// console.log (num1);
const questionE1 =document.getElementById("question");
const formE1 = document.getElementById("form")
const correctAns = num1 * num2;
const inputE1= document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const scoreE1 = document.getElementById("score");


questionE1.innerText = `What is ${num1} multiply by ${num2}?`



formE1.addEventListener("submit",()=>{
    const userAnswer = +inputE1.value
    if(userAnswer == correctAns ){
        score++;
        updatedLocalStorage()
        console.log("score");
    }
    else
    {
        score--;
        updatedLocalStorage()
        console.log("score");
    } 
        
    } 
);

scoreE1.innerText = `Score: ${score}`;

function updatedLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
