
console.log('Задача1');

function result(num1, num2, num3) {
    return (num1 - num2) / num3;
}
let total = result (4, 5, 6);
console.log(total);

console.log('');



console.log('Задача2');

function result1(number) {
    let cube = number ** 3;
    let square = number ** 2;
    return [cube , square];
}
let total1 = result1 (6);
console.log(total1);

console.log('');



console.log('Задача3');

function min(a, b) {
    if(a < b) {
      return a;
    }else {
      return b;
    }
} 
function max(a, b) {
    if(a > b) {
      return a;
    }else {
      return b;
    }
}
let result2 = min(8, 6);
console.log(result2);
let result3 = max(0, 2);
console.log(result3);

console.log('');



console.log('Задача4');

let start = +prompt('Введите первое значение в диапазоне: ');
let end = +prompt('Введите последнее значение в диапазоне: ');
let array = [];
function range() {
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
function conclusion(array) {
    console.log(array);
}
let numb = range();
conclusion(numb);

console.log('');



console.log('Задача5');

let even = +prompt('Введите любое целое число: ');
let isEven = function (even) {
    if (even % 2 === 0) {
        console.log('true');
      } else {
        console.log('false');
    }
}
isEven(even);

console.log('');



console.log('Задача6');

function isEven1(number) {
    return number % 2 === 0;
}
function together(numbers) {
    let numArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isEven1(numbers[i])) {
            numArray.push(numbers[i]);
        }
    }
    return numArray;
}
let numbers = range();
let numArray = together(numbers);
console.log(numArray);;

console.log('');



console.log('Задача7');

let exit = '';
function pyramid(rows, symbol = '1') {
   for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
        exit += symbol //i;
    }
    exit += '\n';
   } 
   console.log(exit);
}
//pyramid(9);
pyramid(10, '*');
//pyramid(10, 'T');

console.log('');



console.log('Задача8');

let h = prompt('Высота пирамидки: ');
function triangle(h) {
    for(let i = 1; i <= h; i++) {
        let str = " ";
        let p = " ";
        for(let j = 0; j < h - i; j++) {
            str += " ";
        }
        for(let k = 0; k < i * 2 - 1; k++) {
            p += "*";
        }
        console.log(`${str + p}`);
    }
}
h = parseInt(h);
triangle(h);

console.log('');

function twoTriangle(h) {
    for(let i = h; i >= 1; i--) {
        let str = " ";
        let p = " ";
        for(let j = h - i; j > 0; j--) {
            str += " ";
        }
        for(let k = i * 2 - 1; k > 0; k--) {
            p += "*";
        }
        console.log(`${str + p}`);
    }
}
twoTriangle(h);

console.log('');



console.log('Задача9');

function fibonacci() {
    let fibArray = [0, 1];
    let i = 2;
    while (fibArray[i - 1] + fibArray[i - 2] <= 1000) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
      i++;
    }
    return fibArray;
}
console.log(fibonacci());

console.log('');
