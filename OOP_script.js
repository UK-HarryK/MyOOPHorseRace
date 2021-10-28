"use strict"
const racetrack = document.getElementById("racetrack")
const finishLine = 200
class Horse{
    constructor(horseNumber){
        this.name = `Horse${horseNumber}`
        this.element = document.createElement("div")
        this.element.classList.add("horse")
        this.X = 0
        racetrack.appendChild(this.element)
    }
    runOnce(){
        this.X += Math.floor(Math.random()*10)
        this.element.style.transform = `translateX(${this.X}px)`
    }
    reset(){
        this.X = 0
        this.element.style.transform = `translateX(${this.X}px)`
    }
    checkWin(){
        if(this.X >= finishLine){
            alert(`${this.name} wins!`)
            return true
        }
    }

}
let horses = 6
let horseStorage = []
let colours = ["red", "blue", "yellow", "orange", "cyan", "black"]

function horseSetUp(numOfHorses){
    for(let i=0; i<numOfHorses; i++){
        horseStorage[i] = new Horse(i)
        horseStorage[i].element.style.top = 50 + i*25 + "px"
        horseStorage[i].element.style.backgroundColor = colours[i]
        
    }
}

function move(){
    for(let h of horseStorage){
        h.runOnce()
        if(h.checkWin()){
            for(let h of horseStorage){
                h.reset()
                window.cancelAnimationFrame(move)
            }
        }
    }
    requestAnimationFrame(move)
}

function startRace(){
    window.requestAnimationFrame(move)
}
horseSetUp(horses)