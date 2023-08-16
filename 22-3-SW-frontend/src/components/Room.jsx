import React from 'react';
import PeerVideo from './atoms/PeerVideo'
import Controler from './atoms/Controler';

export default function Room({myStream, hidden, videoRef, PeervideoRef}) {
  const style={
    display:'flex',
  }

  return (
    <div hidden={hidden} >
      <div style={style}>
      <PeerVideo videoRef={videoRef}/>
      <PeerVideo videoRef={PeervideoRef}/>
      </div>
      <Controler myStream={myStream}/>
    </div>
  );
}

