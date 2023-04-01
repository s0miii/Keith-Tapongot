function calc(){
    let operator = document.getElementById("operator").value;
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    let answer = document.getElementById("answer");

    switch(operator){
        case '+':
            answer.innerHTML = firstNum + secondNum;
            break;
        case '-':
            answer.innerHTML = firstNum - secondNum;
            break;
        case '*':
            answer.innerHTML = firstNum * secondNum;
            break;
        case '/':
            answer.innerHTML = firstNum / secondNum;
            break;
        default:
            answer.innerHTML = "Invalid Input"
    }
}