import * as socketio from 'socket.io-client';
import * as p5 from 'p5'

var socket: socketio.Socket = socketio.io();
var guessModeDiv: HTMLElement | null = document.getElementById("guessMode")
var drawModeDiv: HTMLElement | null = document.getElementById("drawMode")
var chooseModeDiv: HTMLElement | null = document.getElementById("chooseMode")
var chooseButton1: HTMLElement | null = document.getElementById("chooseButton1")
var chooseButton2: HTMLElement | null = document.getElementById("chooseButton2")
var chooseButton3: HTMLElement | null = document.getElementById("chooseButton3")
var subjectH2: HTMLElement | null = document.getElementById("subjectH2")
var guessInput: HTMLElement | null = document.getElementById("guessInput")
var colorInput: HTMLElement | null = document.getElementById("color")
var p5CanvasDiv: HTMLElement | null = document.getElementById("p5Canvas")

type Mode = "guess" | "draw" | "choose"

function switchMode(mode:Mode):void{
    if(!drawModeDiv || !chooseModeDiv || !guessModeDiv)return
    switch(mode){
        case "draw": 
            drawModeDiv.hidden = false
            chooseModeDiv.hidden = true
            guessModeDiv.hidden = true
            return
        case "guess":
            drawModeDiv.hidden = true
            chooseModeDiv.hidden = true
            guessModeDiv.hidden = false
            return
        case "choose":
            drawModeDiv.hidden = true
            chooseModeDiv.hidden = false
            guessModeDiv.hidden = true
            return
        default: return
    }
}
switchMode("draw")