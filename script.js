document.documentElement.lang = "en";

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let head = document.querySelector('head')
head.appendChild(metaUtf8);


let title = document.createElement('title');
title.innerHTML = 'Option';
document.head.appendChild(title);


let montserratFont = document.createElement('link');
montserratFont.rel = 'stylesheet';
montserratFont.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';

let arvoFont = document.createElement('link');
arvoFont.rel = 'stylesheet';
arvoFont.href = 'https://fonts.googleapis.com/css2?family=Arvo&display=swap';

let openSansFont = document.createElement('link');
openSansFont.rel = 'stylesheet';
openSansFont.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';

document.head.appendChild(montserratFont);
document.head.appendChild(arvoFont);
document.head.appendChild(openSansFont);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p);

let div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

let div1 = document.createElement('div');
div1.classList.add('block');
div.appendChild(div1);

let h3 = document.createElement('h3');
h3.innerHTML = 'FREELANCER';
div1.appendChild(h3);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
div1.appendChild(h2);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('text');
div1.appendChild(p1);

let button = document.createElement('button');
div1.appendChild(button);

let span = document.createElement('span');
span.innerHTML = 'START HERE';
button.appendChild(span);

let div1Clone = div1.cloneNode(true);
div1Clone.classList.add('block1');
div.insertBefore(div1Clone, div1);
div.appendChild(div1Clone);


let textH3 = div1Clone.querySelector('h3');
textH3.textContent = 'STUDIO';


let style = document.createElement('style');
style.innerHTML = `
    body {
        margin: 0 auto;
        padding: 0;
        width: 1280px;
    }

    h1 {
        font-family: 'Arvo', serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        text-align: center;
        margin-top: 122px;
        margin-bottom: 0;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #9FA3A7;
        margin-top: 10px;
        margin-bottom: 55px;
    }

    .container {
        width: 800px;
        margin-left: 240px;
        margin-right: 240px;
        margin-bottom: 139px;
        display: flex;
    }

    .block {
        width: 400px;
        text-align: center;
        border: 1px solid #9FA3A7;
        border-radius: 5px;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        margin-top: 81px;
        margin-bottom: 19px;
    }

    h2 {
        width: 60%;
        font-family: 'Arvo', sans-serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        margin-left: 80px;
        margin-bottom: 25px;
    }

    .text {
        width: 60%;
        font-size: 12px;
        line-height: 22px;
        margin-left: 80px;
        margin-bottom: 64.5px;
    }

    button {
        width: 147px;
        height: 46px;
        background-color: #FFFFFF;
        border: 3px solid #FFC80A;
        border-radius: 20px;
        margin-bottom: 75px;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #212121;
    }

    .block1 {
        background-color: #8F75BE; 
    }

    .block1 h3 {
        color: #FFC80A;
    }

    .block1 h2 {
        color: #FFFFFF;
    }

    .block1 p {
        color: #FFFFFF;
    }

    .block1 span {
        color: #FFFFFF;
    }

    .block1 button {
        background-color: #8F75BE;
    }
`;

document.body.appendChild(style);





