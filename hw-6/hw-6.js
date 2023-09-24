// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
	if (numbers[i] === 10)
     break;
}
// Задание 2
const numbers = [1, 5, 4, 10, 0, 3];
const index = numbers.indexOf(4);
console.log(index);
// Задание 3
const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(` `));
// Задание 4
const arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j < 4; j++) {
		arr[i].push(1);
	}
}
console.log(arr);
// Задание 5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
// Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
arr.splice(3,1);
arr.sort();
console.log(arr);
// Задание 7
const arr = [9, 8, 7, 6, 5];
if (arr.includes(Number(prompt(`Угадай число`)))) {
    alert(`Угадал`)
} else {
    alert(`Не угадал`)
}
// Задание 8
const str = 'abcdef';
const reverseStr = [...str].reverse().join('');
console.log(reverseStr);
// Задание 9
const arr = [[1, 2, 3,],[4, 5, 6]];
const result = [].concat(arr[0],arr[1] );

console.log(result);
// Задание 10
const arr = [1, 2, 3, 4, 5];
let sum = 0;
 for (let i = 1; i < arr.length; i++) {
   
    sum = arr[i] + arr[i - 1];
   console.log(sum)
  
  
 }
// Задание 11
const arr = [1, 2, 3, 4, 5];
square = arr.map(number => number **2);

console.log(square)
// Задание 12
const getLengthWords = words => words.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
// Задание 13
function filterPositive(array) {
    return array.filter(number => number < 0)
}
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]);
  

    
      
    


