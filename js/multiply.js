let questionDiv = document.querySelector(".question");
let questionPara = document.getElementById("questionPara");
let form = document.getElementById("question-form");
let input = document.getElementById("question-input");
let questionResult = document.getElementById("question-result");
let answerCounting = document.getElementById("answer-counting");
let answerCount = 0;
let wrongCount = 0;
let questionKind = document.getElementById("question-kind");

questionKind.innerHTML = "곱셈 구구";


let num1 = Math.ceil(Math.random()*9);
let num2 = Math.ceil(Math.random()*9);
let result = num1 * num2;

let makeQuestion = function (){
    num1 = Math.ceil(Math.random()*8 +1);
    num2 = Math.ceil(Math.random()*8 +1);
    result = num1 * num2;
    questionPara.textContent = num1 + " X " + num2 + " = ";
    input.value = "";
    input.focus();
}

input.focus();
makeQuestion();

form.addEventListener("submit", function (event){
    event.preventDefault();
    
    if(result === Number(input.value)){
    makeQuestion();
    questionResult.textContent = "정답입니다";
    answerCounting.textContent = ++answerCount +"/50회 정답입니다";
    }
    else {
    questionResult.textContent = "오답입니다";
    input.value = "";
    input.focus();
    answerCounting.textContent = ++wrongCount +"/50회 오답입니다";
    }

    if(answerCount === 50){
    alert("정답 : " + answerCount + " 오답 : " + wrongCount);
    }
})