

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
