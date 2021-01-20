import * as socketio from 'socket.io-client';

var socket: socketio.Socket = socketio.io();
var guessModeDiv: HTMLElement | null = document.getElementById("guessMode")
var drawModeDiv: HTMLElement | null = document.getElementById("drawMode")
var choiceModeDiv: HTMLElement | null = document.getElementById("chooseMode")
var chooseButton1: HTMLElement | null = document.getElementById("chooseButton1")
var chooseButton2: HTMLElement | null = document.getElementById("chooseButton2")
var chooseButton3: HTMLElement | null = document.getElementById("chooseButton3")
var subjectH2: HTMLElement | null = document.getElementById("subjectH2")
var guessInput: HTMLElement | null = document.getElementById("guessInput")