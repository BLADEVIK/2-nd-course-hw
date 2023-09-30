// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((x, y) => x.age - y.age));

//  Задание 2
 function isPositive(number) {
    return number > 0;
}
function isMale(user) {
    return user.gender === 'male';
}
function filter(array, callback) {
    const filterArrayUser = [];
    for (const item of array) {
        if (callback(item)) {
            filterArrayUser.push(item);
        }
    }
   return filterArrayUser       
}

console.log(filter([3, -4, 1, 9], isPositive)); 
const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(people, isMale));

// Задание 3
let timerId = setInterval(() => console.log(new Date), 3000);
setTimeout(() => { 
    clearInterval(timerId); 
    console.log('30 секунд прошло'); }, 30000);

// Задание 4
function delayForSecond(callback) {
 let timerId = setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }

    }, 1000)
}


function sayHi(name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond (() => sayHi ('Глеб'));
