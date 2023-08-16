import './Main.css' 
import Mycontext from './context/Mycontext';
import { useContext, useRef } from 'react';

export default function EnterRoom() {

  
  const {roomname, hidden, setHidden} = useContext(Mycontext);
  const inputRef = useRef(null);

  function SubmitHandler(event){
    event.preventDefault()
    roomname.current=inputRef.current.value
    setHidden(!hidden)
  }


  return (
    <div hidden={hidden}>
          <form id='welcome' onSubmit={SubmitHandler}>
            <input ref={inputRef} placeholder='이름을 입력해주세요' required type='text'/>
            <button >입장</button>
          </form>
    </div>
  );
}

