import React, { useEffect, useState,useRef } from 'react';
import Main from './components/Main'
import  Mycontext from './components/context/Mycontext';
import './App.css'
import io from 'socket.io-client'
import EnterRoom from './components/EnterRoom'
export default function App() {

  const [socket,setsocket]=useState();
  const [hidden, setHidden] = useState(false);
  const roomname = useRef();
  async function setting_socket(){
    const io_socket = await io("http://localhost:4000/");
    setsocket(io_socket);
  }
  useEffect(()=>{
    setting_socket();
  },[])


  return (
    <div>
      <header>
        <h1>Noom</h1>
      </header>
      <Mycontext.Provider value={{hidden, setHidden, socket, roomname }}>
      <main>
        <EnterRoom/>
        <Main/> 
      </main>
      </Mycontext.Provider>
    </div>
  );
};