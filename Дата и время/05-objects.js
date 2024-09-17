const person = {
    name: 'Nana',
    age: 34,
    youtube: true,
    languages: ['en', 'ru'],
    address: {
        city: 'Piter',
        street: 'Novaya'
    },
    'complex key': 'complex value',
    [1 + 2 + '_key']: 'computed value',
    greet() {
        console.log('Greet from person', this)
    },
    arrow: () => console.log('Arrow', this), //arrow не создаёт собственный контекст. Поэтому принимает более глобальный контекст
    info() {
        console.log(this.name)
    }
}
// console.log(person.address)
// console.log(person['address'])
// const addr = 'address'
// console.log(person[addr])
// console.log(person['complex key'])

// person.age++
// console.log(person.age)

// person.languages.push('de')
// console.log(person.languages)


// Удаление
// person.address = undefined
// delete person.address
// console.log(person)

//Деструктуризация

// // const age = person.age

// const {age, name: firstName = 'test'} = person

// console.log(age, firstName)

//Итерация по ключам объекта

// for(let key in person){

//     // console.log(key)

//     if(person.hasOwnProperty(key)){     //.hasOwnProperty() - дополнительная проверка, чтобы функция не заходила в прототип объекта
//         console.log(person[key])
//     }

// }

// Object.keys(person).forEach((key) => console.log(person[key])) // Более норм способ


///=========this

const logger = {
    keys() {
        console.log('object keys', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    }
}
// const bang = logger.keys.bind(persone) //bind - принимает аргументы. Первый вегда объект. Возвращает новую функцию, но не вызывает её
// bang()

// logger.keys.call(person) //Перечисляем параметры через запятую
// logger.keys.apply(person) // Только 2 параметра. И второй обязательно массив

//==============class

class Human { //родительский класс
    static isHuman = true //Поле статично и существует только в пределах этого класса. Не наследуется
}

class Person extends Human{
    constructor(name, age){
        super()
        this.name = name ?? 'Underfined name'
        this.age = age ?? 'Underfined age'
    }
    sayHello(){
       console.log('Hello from', this.name) 
    }
}

const newPerson1 = new Person('Nasty', 45)
const newPerson2 = new Person('Lena', 79)

console.log(newPerson1.isHuman)