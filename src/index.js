import './less/index.less'

// Your code goes here!

let header = document.querySelector('h1');
let page = document;

//1

page.addEventListener('wheel', (event) =>{
    let number = Math.floor(Math.random() * 10);
    if(number >= 5) {
        header.style.color = 'blue';
    } else if(number < 5) {
        header.style.color = 'yellow';
    }
});

//2

let navigation = document.querySelectorAll('a');

navigation.forEach((a) => {
    a.addEventListener('mouseenter', (event) =>{
        a.style.fontSize = "24px";
    })
});

//3

navigation.forEach((a) => {
    a.addEventListener('mouseleave', (event) =>{
        a.style.fontSize = "16px";
    })
});

//4

let CTA = document.querySelectorAll('.btn');

CTA.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        alert('you have been signed up!');
    })
});

//5

let subHeaders = document.querySelectorAll('h2');

subHeaders.forEach((h2) => {
    h2.addEventListener('dblclick', (event) =>{
        let number2 = Math.floor(Math.random() * 10);
    if(number2 >= 5) {
        h2.style.color = 'blue';
    } else if(number2 < 5) {
        h2.style.color = 'yellow';
    }
    })
});

//6

let subSubHeaders = document.querySelectorAll('h4');
console.log(subSubHeaders)

subSubHeaders.forEach((h4) => {
    h4.addEventListener('copy', (event) =>{
        copyFunction();
    })
});
function copyFunction() {
    alert('You have copied some text!');
};

//7
window.onload = welcomePrompt();

function welcomePrompt() {
    let name = prompt('What is your name?', 'Your Name Here');
    if (name != null) {
        alert('Welcome to the website, ' + name + '!');
      }
};

//8

document.body.addEventListener('click', (event) =>{
    event.target.style.fontSize = "24px";
});

//9

window.addEventListener('resize', (event) => {
    alert('You have changed the window size!');
});

//10

window.addEventListener('keydown', (event) => {
    if(event.key == 0) {
        document.body.innerHTML = '<h1>You divided by zero. Are you happy now?</h1>'
    }
});