// const array = [1, 2, 3, 5, 6]

// console.log(array[array.length - 1])

const inputElement = document.getElementById('title') // Добавили элементики из HTML
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// Начальные элементики, которые уже типа были
const notes = [
    {
        title: 'JJJ',
        completed: false,
    },
    {
        title: 'PPP',
        completed: true,
    }
]


// ================= Первая приложуха
// function getNote(title){
//     return `
//          <li>
//             <span>${title}</span>
//             <span>
//                 <span>&check;</span>
//                 <span>&times;</span>
//             </span>
//         </li>
//         `
// }

// function render(){
//     // for (let i = 0;i < notes.length; i++){
//     //     listElement.insertAdjacentHTML('beforeend', getNote(notes[i]))
//     // }
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNote(note))
//     }
// }
// render()

// createBtn.onclick = function() {
//     if(inputElement.value.length === 0){
//         return
//     }
//     listElement.insertAdjacentHTML('beforeend', getNote(inputElement.value))

// }



// Функция добавления HTML элементов из массива в index.html
// в первый спан добавили название, а в остальные индекс кнопки
function getNote(note, index) {
    return `
         <li>
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span> 
            <span>
                <span class="${note.completed ? 'warning' : ''}" data-index="${index}" data-type="toggle">&check;</span>
                <span data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
        `
}


//Функция добавления новых элементов
function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = `<p>Нет элементов</p>`
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNote(notes[i], i))
    }
    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNote(note))
    // }
}
render()

//Функция для кнопки "Добавить"
createBtn.onclick = function () {
    if (inputElement.value.length === 0) { // Проверили, записали ли мы что-то. Если нет, то ничего не произойдёт. Если да, то идём дальше
        return
    }
    const newNote = { // Создави новый объект
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote) // Добавили в массив
    render() // Вызвали функцию добавления новых элементов
    inputElement.value = '' // очистили поле
}


// Функция для работы кнопок с галочкой и крестиком 
listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index) // Для добавления индекса
        const type = event.target.dataset.type // Для проверки на тип

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed // Если нажимаешь на галочку, то запись либо "сделана", либо нет
        } else if (type === 'remove') {
            notes.splice(index, 1) // Если нажимаешь на крестик, то удаляется элемент
        }
    }

    render()

}
// const person = {
//     name: 'Kate',
//     year: 12,
//     getFullName: function(){
//         console.log(person)
//     }
// }
// console.log(person.name)
// console.log(person['name'])
// const nameConst = 'name'
// console.log(person[nameConst])







// ======================Теория


//-------------Массивы

// const array = ['a', 'b', 'c']
// array.push("d")    //Добавление в конец
// array.unshift('e')     // Добавление в начало
// const name = array.shift()   // Извлекает пеорвый элемент. Работает как ctrl-X
// const name = array.pop()     //Извлекает последний элемент
// console.log(array.reverse())     //переворачивает массив (Мутирует)
// console.log(array.toReversed())   // переворачивает, но не мутирует (лучший. Пользуемся на постоянке)
//console.log(array.sort())     //Сортирует данные (мутирует)
//console.log(array.toSorted())     //Сортирует данные (не мутирует)
// console.log(array.sort(function (a, b) {
//     return b.charCodeAt(0) - a.charCodeAt(0)    //С помощью функции внутри можно задать параметры сортировки. То же можно делать и с toSorted()
// }))  
// console.log(array.splice(2, 1))  //Берёт индекс начального элемента, с которого начинаем удаление (извлечение), и количество элементов, которые надо извлечь (мутирует)
// console.log(array.toSpliced(2, 1))       //То же, что и splice (не мутирует)
// console.log(array.indexOf('d'))      //Проверяет индекс элемента
// console.log(array.with(2, 'o'))      //Заменяет элемент по индексу. Не мутирует
// capitalABC = array.map(function(array){      //Позволяет прописывать функции для изменения элементов массива(типа делает новый массив)
//     // const newArr = array + '!'
//     // return newArr
//     return array.toUpperCase()
// })
// console.log(array.includes('o'))        //Проверяет наличие элемента (true/false)


//---------------Объекты


// const array = [
//     { name: 'NNAN', age: 23 },
//     { name: 'Nom', age: 24 },
//     { name: 'Dora', age: 26 },
//     { name: 'Bio', age: 21 },
// ]

// let finded       //Пытаемся без методов найти, кому 23 года

// for(let person of array){
//     if(person.age === 23){

//         finded = person

//     }
// }

// const finded = array.find(function(person){      //Метод нахождения объекта по параметрам
// return person.age === 23
//   // if (person.age === 23){
//  //     return true
//  // }
// })

// const finded = array.find((person) => person.age === 23)  //Суть та же (стрелочная функция)

// const finded = array.findIndex((person) => person.age === 25)    //Суть та же, но находит индекс элемента. Если не находит, то пишет -1

// const filtered = array.filter((person) => person.age < 24)  //фильтрует по заданным параметрам через функцию

// let sumAge = 0 

// filtered.forEach((person) => sumAge += person.age) //делает итерацию (перебирает массив)

// const sumAge = array.filter((persone) => persone.age < 24).map((persone) => persone.age).reduce((acc, person) =>  acc + person , 0) // .reduce() - Начальное значение - 0. Функция с аккумулятором и объектом итерации

// console.log(sumAge)

// const string = 'Привет, как дела?'
// const reverse = string.split('').toReversed().join('') //.split() превращает строку в массив по параметру в скобочках. Если там пустые ковычки, то раздробит на символы отдельно // .join() Соединяет по параметрам в скобочках
// console.log(reverse)