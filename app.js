const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId
let startTime 
let saveTime = 0


function startTimer(){
    startTime = Date.now()
    
    cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer(){
    saveTime = saveTime + Date.now() - startTime
    console.log(saveTime)
    cancelAnimationFrame(cancelId);
}
function resetTimer(){
    startTime = Date.now()
    saveTime = 0
    timerMilliseconds.innerHTML = "000";
    timerSeconds.innerHTML = "00";
    timerMinutes.innerHTML = "00";

}


function updateTimer(){
    let millisElasped = saveTime + Date.now() - startTime
    let secondsElasped = millisElasped / 1000
    let minutesElasped = secondsElasped / 60

    let minutesText = Math.floor(minutesElasped)
    let secondsText = Math.floor(secondsElasped % 60)
    let millisText = millisElasped % 1000



    if(minutesText.toString().length === 1 ){
        minutesText = "0" + minutesText
    }

    if( secondsText.toString().length === 1){
        secondsText = "0" + secondsText
    }

    if(millisText.toString().length < 3){
        millisText = millisText.toString().padStart(3, "0")
    }


    timerMilliseconds.innerHTML = millisText;
    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
    cancelId = requestAnimationFrame(updateTimer)
}