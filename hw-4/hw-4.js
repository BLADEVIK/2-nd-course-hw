// Задание 1
for(let i=1;i<=2;i++){
    alert(`Привет`);
}
// Задание 2
for (let i=1;i<6;i++){
alert(i);
}
// Задание 3
for(let i=7;i<=22;i++){
    alert(i);
}
// Задание 4
const obj={
    Коля:` Заплата 200 долларов`,
    Вася:` Заплата 300 долларов`,
    Петя:` Заплата 400 долларов`
};
for(key  in obj){
    alert(`${key}:${obj[key]}`);
}
// Задание 5
let num=0;
let n= 1000;
while(n >= 50){
   n = n/2;
  num++;
}
alert("Итераций: " + num +", получилось число " + n);
// Задание 6
for(let i=5;i<=31;i+=7){
  alert(`Сегодня пятница,${i}-е число. Необходимо подготовить отчет.`);
}


