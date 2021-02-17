import * as socketio from 'socket.io-client';
import startDraw from './draw';
import startWatch from './watch';

var socket: socketio.Socket = socketio.io();
var guessModeDiv: HTMLElement | null = document.getElementById("guessMode")
var drawModeDiv: HTMLElement | null = document.getElementById("drawMode")
var chooseModeDiv: HTMLElement | null = document.getElementById("chooseMode")
var chooseButton1: HTMLElement | null = document.getElementById("chooseButton1")
var chooseButton2: HTMLElement | null = document.getElementById("chooseButton2")
var chooseButton3: HTMLElement | null = document.getElementById("chooseButton3")
var subjectH2: HTMLElement | null = document.getElementById("subjectH2")
var guessInput: HTMLElement | null = document.getElementById("guessInput")
var colorInput: HTMLInputElement | null = document.getElementById("color") as HTMLInputElement
var brushSizeInput: HTMLInputElement | null = document.getElementById("brushSize") as HTMLInputElement
var p5DrawDiv: HTMLElement | null = document.getElementById("p5Draw")
var p5WatchDiv: HTMLElement | null = document.getElementById("p5Watch")
var drawModeButton: HTMLElement | null = document.getElementById("draw")
var chooseModeButton: HTMLElement | null = document.getElementById("choose")
var guessModeButton: HTMLElement | null = document.getElementById("guess")



type Mode = "guess" | "draw" | "choose"

function switchMode(mode:Mode):void{
    if(!drawModeDiv || !chooseModeDiv || !guessModeDiv)return
    switch(mode){
        case "draw": 
            drawModeDiv.style.display = "initial"
            chooseModeDiv.style.display = "none"
            guessModeDiv.style.display = "none"
            startDraw(p5DrawDiv,socket, colorInput, brushSizeInput)
            return
        case "guess":
            drawModeDiv.style.display = "none"
            chooseModeDiv.style.display = "none"
            guessModeDiv.style.display = "initial"
            startWatch(p5WatchDiv,socket)
            return
        case "choose":
            drawModeDiv.style.display = "none"
            chooseModeDiv.style.display = "initial"
            guessModeDiv.style.display = "none"
            return
        default: return
    }
}
switchMode("draw")

if(drawModeButton)drawModeButton.addEventListener("click",() => switchMode("draw"))
if(guessModeButton)guessModeButton.addEventListener("click",() => switchMode("guess"))
if(chooseModeButton)chooseModeButton.addEventListener("click",() => switchMode("choose"))