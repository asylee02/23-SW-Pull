import React from 'react';

export default function Controler({myStream}) {
  const margin ={
    margin:'5px'
  }

  function ClickMuted(e){
    const AudioHandler = myStream.getAudioTracks()[0]
    console.log(AudioHandler);
    AudioHandler.enabled = !AudioHandler.enabled
    AudioHandler.enabled ? e.target.innerText="음소거" : e.target.innerText="음소거 해제" 
  } 
  function ClickCamera(e){
    const VideoHandler = myStream.getVideoTracks()[0]
    console.log(myStream.getTracks())
    console.log(VideoHandler);
    VideoHandler.enabled = !VideoHandler.enabled
    VideoHandler.enabled ? e.target.innerText="카메라 끄기" : e.target.innerText="카메라 켜기"  
  }
  return (
    <div >
      <button style={margin} onClick={ClickMuted} >음소거</button>
      <button style={margin} onClick={ClickCamera} >카메라 끄기</button>
    </div>
  );
}

