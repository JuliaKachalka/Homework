console.log('Задача1');

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

console.log('');



console.log('Задача2');

let date = '2025-12-31';
console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1',));

console.log('');



console.log('Задача3');

let str1 = 'Я учу javascript!';
console.log(str1);
console.log(str1.substr(2, 4));
console.log(str1.substr(6, 10));
console.log(str1.substring(2, 5));
console.log(str1.substring(6, 16));
console.log(str1.substring(6, 17));
console.log(str1.slice(2, 5));
console.log(str1.slice(6, 16));

console.log('');



console.log('Задача4');

let arr = [4, 2, 5, 19, 13, 0, 10];
let summ = 0;
for(let i = 0; i < arr.length; i++) {
    summ += Math.pow(arr[i], 3);
}
let square = Math.sqrt(summ);
console.log(square);

console.log('');



console.log('Задача5');

let a = 3;
let b = 5;
let c = Math.abs(a-b);
console.log(c);

a = 6;
b = 1;
c = Math.abs(a-b);
console.log(c);

console.log('');



console.log('Задача6');

let now = new Date();

function current(number) {
    return number < 10 ? '0' + number : number;
}
let hours = current(now.getHours());
let minutes = current(now.getMinutes());
let seconds = current(now.getSeconds());
let day = current(now.getDate());
let month = current(now.getMonth() + 1);
let year = current(now.getFullYear());

let dateNow = hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
console.log(dateNow);

console.log('');



console.log('Задача7');

let line = 'aa aba abba abbba abca abea';
console.log(line.match(/ab+a/gi));

console.log('');



console.log('Задача8');

function tel(telPhone) {
    let phone = /^\+\d{1,3}\s\(\d{1,5}\)\s\d{5,7}$/;
    return phone.test(telPhone);
}
console.log(tel('+1 (12345) 1234567'));
console.log(tel('456 8524 6254'));

console.log('');



console.log('Задача9');



console.log('');



console.log("Задача10");



console.log('');







