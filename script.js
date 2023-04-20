
console.log('Задача1');

let arr = [];
for(let i = 1; i <= 5; i++){
    arr.push(i);
}
console.log(arr);

console.log('');



console.log('Задача2');

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] < -3 && arr1[i] > -10 && arr1[i] < 0){
        console.log(arr1[i]);
    }
}

console.log('');



console.log('Задача3');

let arrFor = [];
for(let i = 23; i <= 57; i++){
    arrFor.push(i);
}
console.log(arrFor);

let result = 0;
for (let b = 0; b < arrFor.length; b++){
    result += arrFor[b];
}
console.log(result);

let arrWhile = [];
let a = 23;
while (a <= 57){
    arrWhile.push(a);
    a++;    
}
console.log(arrWhile);

console.log('');



console.log('Задача4');

let c = ['10', '20', '30', '50', '235', '3000'];
for (let d = 0; d < c.length; d++) {
  let number = c[d][0];
  if (number === '1' || number === '2' || number === '5') {
    console.log(c[d]);
  }
}

console.log('');



//document.write('Задача5');

let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(let days = 0; days < week.length; days++){
    if(week[days] === 'СБ' || week[days] === 'ВС'){
        document.write('<b>' + week[days] + '</b>' + '<br />'); 
    }else{
        document.write(week[days] + '<br />');
    }
}

document.write(''); 



console.log('Задача6');

let tools = ['Перфоратор', 'Болгарка', 'Шуруповерт', 'Фен', 'Дрель', 'Лобзик', 'Циркулярная пила'];
console.log(tools.length);
for(let construct = 0; construct < tools.length; construct++){
    console.log(tools[construct]);
}
console.log(tools[6]);

console.log('');

let tools1 = ['Перфоратор', 'Болгарка', 'Шуруповерт', 'Фен', 'Дрель', 'Лобзик'];
tools1.push('Циркулярная пила');
let saw1 = tools1[tools1.length - 1];
console.log(saw1);

console.log('');



console.log('Задача7');



console.log('');



console.log('Задача8');

let back = [12, false, 'Текст', 4, 2, -5, 0];
let k = 0;
while (k < back.length) {
    console.log(back[k]);
    k++;
}
back.reverse();
console.log(back);

console.log('');


console.log('Задача9');

let whole = [5, 9, 21, , , 9, 78, , , , 6];
let wholeZero = 0;
for(let zero = 0; zero < whole.length; zero++){
    if(whole[zero] === undefined){
        wholeZero++;
    }
}
console.log('Количество нулевых элементов: ' + wholeZero);

console.log('');



console.log('Задача10');



console.log('');



console.log('Задача11');



console.log('');







