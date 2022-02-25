

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
        healthP1 = 20
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

//Dice Container
const diceOne = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");
const roll = document.getElementById("roll");

roll.addEventListener('click', ()=>{

    diceOne.innerHTML = Math.ceil(Math.random()*6)
    diceTwo.innerHTML = Math.ceil(Math.random()*6)
})

/***********************************************API*****************************************/ 


const APIURL = "https://api.magicthegathering.io/v1/"

//selects the main part of the document. used on line 115 to loop all the cards into the main section. 
const main = document.querySelector('main');

//async await. calls the API to get the card objects. resData is the response. 
async function getCards(){
    const resp = await fetch(APIURL+"cards");
    const resData = await resp.json();

    //now resData gets looped through and the relevant data gets grabbed
    resData.cards.forEach(card =>{

        //destructed object so we dont have to use .card on everything we pull out.
        const {imageUrl, name, colorIdentity} = card;
        //create a new div for everycard
        const cardElement = document.createElement("div");
        //name the new div the cardContainer class
        cardElement.classList.add('cardContainer');
        //then add the img h3 span etc into the html of the card container div.
        cardElement.innerHTML = `
            <img 
                src="${imageUrl}" 
                alt="${name}"
            />
            <div class="cardInfo">
                <h3>${name}</h3>
                <span>${colorIdentity}</span>
            </div>`;
        // once every loop is done and all of the relevant html is build with info the card gets added to main
        main.appendChild(cardElement)
    })

    
    console.log(resData)
    
}

getCards();