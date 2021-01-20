import * as express from 'express';
import * as socketio from "socket.io";
import * as path from "path";

// SETUP
///////////////////////////////////////////////////
const app = express(); //create express app
var serv = require('http').Server(app); //serve http over app
var io = require('socket.io')(serv); // connect socket.io to server


// HTTP SERVER
///////////////////////////////////////////////////

//Start Server
serv.listen(8000); // specified port or 8k as backup

//route main page in index
app.get('/',function(req, res) {
	res.sendFile(path.resolve('./public/index.html'));
});
//Serve static files
app.use('/dist',express.static(path.resolve('./dist')));
app.use('/',express.static(path.resolve('./public')));


// SOCKET HANDLING
///////////////////////////////////////////////////

//handle incoming socket connections
io.sockets.on('connection', function (socket: socketio.Socket) {

	//log a new connection
	console.log('a new user connected. ID: ',socket.id);

});

console.log('SERVER STARTED');