// let num = 42;
// let firstName = 'Ana'
// const isProgrammer = true // не может измениться

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input_1')
const input2 = document.getElementById('input_2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function (){
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

function printResult(result){
    if(result < 0){
        resultElement.style.color = 'red'
    } else{
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}
function someModificate( inp1, inp2, actionsimbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    
    return actionsimbol == '+' ? num1 + num2 : num1 - num2

    // if(actionsimbol == '+'){
    //     return num1 + num2
    // } else if(actionsimbol == '-'){
    //     return num1 - num2
    // }

}

submitBtn.onclick = function () {
    const res = someModificate(input1, input2, action)
    printResult(res)
    // if(action == '+'){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else{
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
    
} 

