"use strict"
const racetrack = document.getElementById("racetrack")
const finishLine = 500

class Race{
    constructor(finishLinePX){
        this.racetrack = document.createElement("div")
        body.appendChild(this.racetrack)
        this.finishLine = finishLinePX
    }

}


class Horse{
    constructor(colour){
        this.name = `${colour} Horse`
        this.element = document.createElement("div")
        this.element.classList.add("horse")
        this.X = 0
        this.element.style.backgroundColor = colour
        racetrack.appendChild(this.element)
    }
    move(){
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
let numHorses = 6
let horses = []
let colours = ["red", "blue", "yellow", "orange", "cyan", "black"]

function horseSetUp(numOfHorses){
    for(let i=0; i<numOfHorses; i++){
        horses[i] = new Horse(colours[i])
        horses[i].element.style.top = 50 + i*25 + "px"
    }
}

function moveHorses(){
    let winner = null
    for(let h of horses){
        h.move()
        if(h.checkWin()){
            winner = h
        }
    }
    if(!winner){
        requestAnimationFrame(moveHorses)
    }else{
        for(let h of horses){
            h.reset()
        }
    }
}

function startRace(){
    requestAnimationFrame(moveHorses)
}
horseSetUp(numHorses)