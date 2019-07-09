import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './AppNew';
import Button from './Button';
import * as serviceWorker from './serviceWorker';

var leftBorderWidth = 111;
let second = 2,
    isCh = true,
    isCl = true;

if (second = 2) {
/*
    alert('script.js' + Date());
*/
}
else {
    console.log(Date());
    console.log(isCh || isCl);
    alert('script.js' + Date());
}

(isCh) ? alert('true') : alert('false');

switch (second) {
    case second < 2:
        alert('second < 2');
        break;
    case second = 2:
        alert('second = 2');
        break;
    case second > 2:
        alert('second > 2');
        break;
    default:
        alert('?');
        break;
}

// циклы
let n = 1;
while (n < 5) {
    console.log(n);
    n++;
}

do {
    console.log(n+10);
    n++;
}
while (n < 10);

for (let i = 1; i < 4; i++) {
    if (i==3) {
        continue
    }
    console.log(i*100);
}

function showFirstMessage(text) {
    let n = 12,
        second = 3;
    alert(text + n + "second = "+second);
}

function calc(a, b) {
    return a+b;
}


//стрелочные функции, не имеют контекста вызова, используются в обработчиках событий
let calculator = (a, b) => a*b;


showFirstMessage("thump up!");
console.log("second = "+second + calc(5, 10) + calculator(2, 3.97));

function Greet(props) {
    let phrase = "New World!";
    return(
        <h1> Hello {phrase} {4 + 4} {props.phrasenew} !!! My name is {props.name} ! </h1>
    )
}

function GreetAll() {
    let phrase = "New World!";
    return(
        <div>
            <h1> Hello {phrase} name = "1"! </h1>
            <h1> Hello {phrase} ! </h1>
            <h1> Hello {phrase} ! </h1>
            <h1> Hello {phrase} ! </h1>
        </div>
    )
}

class AppSuper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Clock />
                <Button />
            </div>
        )
    }
}

ReactDOM.render(<AppSuper />, document.getElementById('root'));
//ReactDOM.render(<GreetAll />, document.getElementById('root'));


//const element = <Greet phrasenew = "Next world" name = "Alex"/>;

//ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.render(<Greet phrasenew = "Next world" name = "Alex"/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
