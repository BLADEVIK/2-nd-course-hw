// Задание 1
function difference(a, b){ 
    if (a <= b) {
      return a ;  
    }
    else{
      return b;
    }
}
console.log(difference(8, 4));
// Задание 2
function evenNumber(n) {
   if(n % 2===0){
     return (`Число четное`);
   }
   else {
     return (`Число нечетное`);
   }
}
console.log(evenNumber(22));
// Задание 3
const degreeNumber = a =>  {
    let numberSquare=a**2;
    console.log(numberSquare);
    return(numberSquare);
}
console.log(degreeNumber(6));
// Задание 4
function ageUser(a) {
    if (a < 0) {
       console.log(`Вы ввели неправильное значение`) ;
    }
    else if ((a <= 12) && (a > 0) ){
        console.log(`Привет, друг!`);
    }
    else {
        console.log(`Добро пожаловать!`);
    }
}
  ageUser(-1)
// Задание 5
function dataUser(a, b) {
    if ((isNaN(a) ) || (isNaN(b))) {
      console.log(`Одно или оба значения не являются числом`) ; 
    }
    else{
    return a * b;
    }
}
     console.log(dataUser(7, 5));
// Задание 6
 function numberUser() {
  let numCube = prompt(`Введите число`);
  if (!isNaN(numCube)){
    return console.log(`${numCube} в кубе ровняется ${numCube**3}`);
  }
  else{
    return console.log(`Переданный параметр не является числом`);
  }
 }
 numberUser();
// Задание 7
function getRectangleArea() {
    return this.radius ** 2 * 3.14;
}
function getRectanglePerimiter() {
   return this.radius * 2 * 3.14; 
}
const circle1={ 
    radius:5,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}

const circle2={ 
    radius:7,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}
    console.log(circle1.getArea());
    console.log(circle1.getPerimiter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimiter());



    



