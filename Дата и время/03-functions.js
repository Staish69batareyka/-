//Function Declaration - мы можем в начале функцию вызвать, а потом объявить, и ничего не поломается
function greet(name){
   console.log('Hello', name)
}


//Function Expression - Вызываем только после того, как написали

const greet2 = function(name){
    console.log('Hello', name)
}
// console.dir(greet) // Даёт поднаготную функции

// setTimeout(function(){greet('Nasty')}, 3000)
// setInterval(function(){greet('Nasty')}, 3000)

// let counter = 0
// const interval = setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval) // Останавливает setInterval
//     }else{
//         ++counter
//     }
// }, 2000)

//Arrow Functions - можно не писать фигурные скобочки и return, 

const arrow = (name) => {console.log('Hello', name)}

// ====================== Default Parameters(fichy)


function sumAll(...array){
    // let res = 0              // Можно так
    // for (let i of array){
    //     res += i
    // }
    // return res

    return array.reduce((acc, cur) => acc += cur, 0)
}

// console.log(sumAll(1, 2, 3, 4, 5, 9))

//Closures

function createPerson(name){
    return function(lastname){
        console.log(name + ' ' + lastname)
    }
}

const addLastname = createPerson('Nasty')

console.log(addLastname('Priv'))
console.log(addLastname('Amm'))