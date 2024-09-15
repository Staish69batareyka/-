(function () {
    const plus = document.querySelector('#plus')
    const minus = document.querySelector('#minus')
    const del = document.querySelector('#del')
    const umn = document.querySelector('#umn')
    const num1 = document.querySelector('#num_1')
    const num2 = document.querySelector('#num_2')
    const rez = document.querySelector('#rez')
    const result = document.querySelector('p')

    plus.onclick = () => { action = "+" }
    minus.onclick = () => { action = "-" }
    del.onclick = () => { action = "/" }
    umn.onclick = () => { action = '*' }

    function someResult(inp1, inp2, someAction){
        const input1 = Number(inp1.value)
        const input2 = Number(inp2.value)
        if(someAction === '+'){return input1 + input2}
        else if(someAction === '-'){return input1 - input2}
        else if(someAction === '/'){return input1 / input2}
        else if(someAction === '*'){return input1 * input2}
    }

    function print(resultElem){
        result.textContent = resultElem
    }

    rez.onclick = () => {
        const r = someResult(num1, num2, action)
        print(r)
    }


})()