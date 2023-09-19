
function monthNumber(a){
    a=prompt(`Введите число месяца`);

    if ((a > 0) && (a < 3))  {
       alert(`Зима`); 
    }
    if ((a > 11) && (a < 13)) {
        alert(`Зима`); 
    }
    
    if ((a > 2) && (a < 6)) {
        alert(`Весна`);
    }
    if ((a > 5) && (a < 9)) {
        alert(`Лето`);
    }
    if ((a > 8) && (a < 12)){
        alert(`Осень`);
    }

    else {
        alert(`Неверно введен месяц`)
    }
}
     
    



