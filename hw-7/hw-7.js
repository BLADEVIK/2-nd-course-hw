// Задание 1
console.log(`Hello World`.toUpperCase());

// Задание 2
function searchStart(array, searchPhrase){
    let newArray = [];
array.forEach(element => {
    if (element.toLowerCase().startsWith(searchPhrase.toLowerCase())) {
		newArray.push(element);    
	} 
});
return newArray; 
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
function getRandomNumber(min,max) {
   return Math.floor(Math.random() * (max - min + 1)) + min 
}
console.log(getRandomNumber(1, 10));

// Задание 6
const randomInt = (min, max) => { 
    let randomUser = min + Math.random() * (max + 1 - min); 
     return Math.floor(randomUser); 
   } 
    
   const getRandomArrNumbers = (userNumber) => { 
    let array = []; 
    for (let i = 0; array.length < Math.floor((userNumber / 2)); i++) { 
     array.push(randomInt(0, userNumber)); 
    } 
    console.log(array); 
   } 
    
   getRandomArrNumbers(7);

// Задание 7
const randomInt = (min, max) => { 
         let randomUser = min + Math.random() * (max + 1 - min); 
          return Math.floor(randomUser); 
}
console.log(randomInt(2,8));

// Задание 8
let currentDate = new Date();
console.log(currentDate);

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function userDate(){
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate =( `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}  ${days[myDate.getDay()]}`);
let hour = myDate.getHours(); 
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(fullDate); 

console.log(`${hour}:${minute}:${second}`);
}

userDate()

// Задание 11
function gameFruit(){ 
    const gamesArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let gamesArrayNew = gamesArray.sort(() => Math.random() - 0.5);
    alert(`Выбери первый и последний элемент: `+ gamesArrayNew);
    for (let i = 0; i < gamesArrayNew.length; i++) {
        let firstFruit = gamesArrayNew[0];
        let lastFruit = gamesArrayNew[6];
        let userFirstFruit = prompt(`Чему равнялся первый элемент массива?`);
        let userLastFruit = prompt(`Чему равнялся последний элемент массива?`);
        if ((firstFruit.toLowerCase() === userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() === userLastFruit.toLowerCase())) {
           alert(`угадал оба элемента`) 
           break
        }
        else if ((firstFruit.toLowerCase() !== userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() !== userLastFruit.toLowerCase())){
            alert(`Оба ответа неверны`)
            break
        }
        else {
            alert(`Вы были близки к победе!`)
            break
        }
        
    }
    }
    gameFruit()  


