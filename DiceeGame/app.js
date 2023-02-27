const play  = document.querySelector('#btn');


const randomNumber = (to) =>{
    let randNum  = Math.floor(Math.random()* to);
    return randNum;
}

const randomNumberStoE = (min, max) =>{
    return Math.floor((Math.random() * (max-min)+min));
}

let dice1 = document.querySelector('.dice1').src = `img/${randomNumberStoE(1,6)}.jpeg`;
let dice2 = document.querySelector('.dice2').src = `img/${randomNumberStoE(1,6)}.jpeg`;


play.addEventListener('click', ()=>{
    location.reload();
})