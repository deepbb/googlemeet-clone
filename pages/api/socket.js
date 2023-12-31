import { Server } from "socket.io";
const SocketHandler =(req,res) => {
    console.log("called api");
    if(res.socket.server.io) {
        console.log("socket already cnnected");
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', (socket)=> {
            console.log("Socket is Connected");
        } )
    }
    res.end()
} 

export default SocketHandler;