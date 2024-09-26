import io from 'socket.io-client';
import {useEffect} from "react";



function App() {

    useEffect(() => {
        const socket = io('https://chat-back-ten.vercel.app/');
        socket.on('connect', () => {
            console.log('Connected to server');
        });
    }, []);

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
  )
}

export default App
