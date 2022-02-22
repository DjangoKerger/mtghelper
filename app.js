
/** CLOCK LOGIC */
const currentTime = () => {
    let fullDate = new Date();
    let hour = fullDate.getHours() % 12 || 12;
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    if (hour < 10){
        hour = "0"+ hour
    }
    if (min < 10){
        min = "0"+ min
    }
    if (sec < 10){
        sec = "0"+ sec
    }

    
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + min;
    document.getElementById('seconds').innerHTML = ":" + sec;  
} 

setInterval(currentTime, 1000)

/* HEALTH LOGIC*/ 
//player 1
    let healthP1 = 20;
    const addP1 = document.getElementById('addHealthP1');
    const subP1 = document.getElementById('subHealthP1');
    const resetP1 = document.getElementById('resetHealthP1')
    const healthHolderP1 = document.getElementById('healthCounterP1');
    healthHolderP1.innerHTML = healthP1;
    

    addP1.addEventListener('click', () => {
        healthHolderP1.innerHTML = ++healthP1 
    });

    subP1.addEventListener('click', () => {
        healthHolderP1.innerHTML = --healthP1
    });

    resetP1.addEventListener('click', ()=> {
        startingHealth = 20
        healthHolderP1.innerHTML = healthP1
    })

//p2 health counter

let healthP2 = 20;
const addP2 = document.getElementById('addHealthP2');
const subP2 = document.getElementById('subHealthP2');
const resetP2 = document.getElementById('resetHealthP2');

const healthHolderP2 = document.getElementById('healthCounterP2');
healthHolderP2.innerHTML = healthP2

addP2.addEventListener('click', ()=>{
    healthHolderP2.innerHTML = ++healthP2
})

subP2.addEventListener('click', ()=>{
    healthHolderP2.innerHTML = --healthP2
})

resetP2.addEventListener('click', ()=>{
    healthP2 = 20
    healthHolderP2.innerHTML = healthP2
})