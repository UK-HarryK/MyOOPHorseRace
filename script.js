var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")
var yellowHorse=document.getElementById("yellowHorse")

var redHorseX=0
var blueHorseX=0
var yellowHorseX=0
const finishLine = document.body.clientWidth - 200

function move(){
    redHorseX += Math.floor(Math.random()*10)
    redHorse.style.transform = `translateX(${redHorseX}px)`
    blueHorseX += Math.floor(Math.random()*10)
    blueHorse.style.transform = `translateX(${blueHorseX}px)`
    yellowHorseX += Math.floor(Math.random()*10)
    yellowHorse.style.transform = `translateX(${yellowHorseX}px)`
    if(((redHorseX && blueHorseX) && yellowHorseX) < finishLine){
        requestAnimationFrame(move)
    } else if(redHorseX>=finishLine){
        alert("Red Horse Wins!")
        redHorseX = 0
        redHorse.style.transform = `translateX(${redHorseX}px)`
        blueHorseX = 0
        blueHorse.style.transform = `translateX(${blueHorseX}px)`
        yellowHorseX = 0
        yellowHorse.style.transform = `translateX(${yellowHorseX}px)`
    } else if(blueHorseX>=finishLine){
        alert("Blue Horse Wins!")
        redHorseX = 0
        redHorse.style.transform = `translateX(${redHorseX}px)`
        blueHorseX = 0
        blueHorse.style.transform = `translateX(${blueHorseX}px)`
        yellowHorseX = 0
        yellowHorse.style.transform = `translateX(${yellowHorseX}px)`
    } else if(yellowHorseX>=finishLine){
        alert("Yellow Horse Wins!")
        redHorseX = 0
        redHorse.style.transform = `translateX(${redHorseX}px)`
        blueHorseX = 0
        blueHorse.style.transform = `translateX(${blueHorseX}px)`
        yellowHorseX = 0
        yellowHorse.style.transform = `translateX(${yellowHorseX}px)`
        yellowHorseX = 0
        yellowHorse.style.transform = `translateX(${yellowHorseX}px)`
    }

function startRace(){
    window.requestAnimationFrame(move)
}







