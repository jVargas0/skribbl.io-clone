import * as P5 from 'p5'
import * as socketio from 'socket.io-client';
var socket:socketio.Socket | null = null
var instance:P5 | null = null
function watch(p5:P5):void{
    p5.setup = ():void =>{
        p5.createCanvas(400,400)
        
    }
    p5.draw = ():void =>{
        
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
export default (container:HTMLElement | null,s:socketio.Socket):void =>{
    socket = s
    if(!instance){
       instance = new P5(watch,container || undefined)
    }
    else{
        instance.clear()
    }
}