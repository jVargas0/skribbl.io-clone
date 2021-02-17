import * as P5 from 'p5'
import * as socketio from 'socket.io-client';
var instance:P5 | null = null
var socket:socketio.Socket | null = null
var colorInput: HTMLInputElement | null = null
var brushSizeInput: HTMLInputElement | null = null
var prevX: number = 0
var prevY: number = 0

function draw(p5:P5):void{
    p5.setup = ():void =>{
        p5.createCanvas(400,400)
        
    }
    p5.draw = ():void =>{
        if(!colorInput || !brushSizeInput || !socket)return
        if(p5.mouseIsPressed && p5.mouseY >= 0 && p5.mouseY <= 400 && p5.mouseX >= 0 && p5.mouseX <=400){
            socket.emit('line',{
                x1:prevX,
                y1:prevY,
                x2:p5.mouseX,
                y2:p5.mouseY,
                color:colorInput.value,
                size:parseInt(brushSizeInput.value),
            }as Line)
        }
        prevX = p5.mouseX
        prevY = p5.mouseY
    }


    //recieve draw
    if(!socket)return
    socket.on("drawLine",(line:Line)=>{
        p5.stroke(line.color)
        p5.strokeWeight(line.size)
        p5.line(line.x1,line.y1,line.x2,line.y2)
    })
    socket.on("clear",()=>{
        p5.clear()
    })
}
export default (
        container:HTMLElement | null,
        s:socketio.Socket,
        cI: HTMLInputElement | null,
        bSI: HTMLInputElement | null
):void =>{
    socket = s
    colorInput = cI
    brushSizeInput = bSI
    if(!instance){
       instance = new P5(draw,container || undefined)
    }
    else{
        instance.clear()
    }
}
// var prevX = 0
// var prevY = 0
// function draw() {
//    if (mouseIsPressed && mouseY >= 0) {
//      socket.emit('line',prevX,prevY,mouseX,mouseY,myColor)

//   } 
//   prevX = mouseX
//   prevY = mouseY

// }
// socket.on('draw', function(x1,y1,x2,y2,thecolor){
//   stroke(thecolor)
//   if (thecolor == 'white'){
//     strokeWeight(50)
    
//   } else {
//     strokeWeight(10)
//   }
//   line(x1,y1,x2,y2)
// })