import './less/index.less'

// Your code goes here!

let header = document.querySelector('h1');
let page = document;

//First Event Listener

page.addEventListener('wheel', (event) =>{
    let number = Math.floor(Math.random() * 10);
    console.log(number);
    if(number >= 5) {
        header.style.color = 'blue';
    } else if(number < 5) {
        header.style.color = 'yellow';
    }
});

//Second Event Listener

let navigation = document.querySelectorAll('a');

navigation.forEach((a) => {
    a.addEventListener('mouseenter', (event) =>{
        a.style.fontSize = "24px";
    })
});

//Third Event Listener

navigation.forEach((a) => {
    a.addEventListener('mouseleave', (event) =>{
        a.style.fontSize = "16px";
    })
});

//Fourth Event Listener

let CTA = document.querySelectorAll('.btn');
console.log(CTA);

CTA.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        alert('you have been signed up!');
    })
});


