const cWeight = document.querySelector('.weight');
const cheight = document.querySelector('.height');
let btn = document.querySelector('#formsubmit');
let sendAns = document.querySelector('.sendAns'); 

let weight;
cWeight.addEventListener('change',()=>{
    weight= cWeight.value;
    weight = Number(weight);
})

let height;
cheight.addEventListener('change',()=>{
    height = cheight.value;
    height = Number(height)
})

function showResult(e){
    e.preventDefault();
    let bmi = weight/(height*height);
    sendAns.textContent = bmi.toFixed(2);
}

btn.addEventListener('submit', showResult)


