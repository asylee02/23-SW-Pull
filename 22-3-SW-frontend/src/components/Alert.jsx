import React from 'react';
import Controler from './atoms/Controler';
import PeerVideo from './atoms/PeerVideo';

export default function Alert({confirm, onbuttonClick, myStream, confirmVideo}) {
  const flexStyle={
    display:'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
  }
  return (
    <div>
      <div id='confirm' hidden={confirm}>
        <PeerVideo videoRef={confirmVideo}/>
          <div id='confirm_button' style={flexStyle}>
            <Controler myStream={myStream}/>
            <button onClick={onbuttonClick}>입장</button>
          </div>
          
        </div>
    </div>
  );
}

