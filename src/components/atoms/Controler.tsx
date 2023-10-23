import React from 'react';

interface ControlerProps {
  myStream: MediaStream; // 이 부분은 myStream의 타입을 정의해야 합니다.
}

export default function Controler({ myStream }: ControlerProps) {
  const margin = {
    margin: '5px',
  };

  function ClickMuted(e: React.MouseEvent<HTMLButtonElement>) {
    const AudioHandler = myStream.getAudioTracks()[0];
    console.log(AudioHandler);
    AudioHandler.enabled = !AudioHandler.enabled;
    AudioHandler.enabled ? (e.currentTarget.innerText = '음소거') : (e.currentTarget.innerText = '음소거 해제');
  }
  function ClickCamera(e: React.MouseEvent<HTMLButtonElement>) {
    const VideoHandler = myStream.getVideoTracks()[0];
    console.log(myStream.getTracks());
    console.log(VideoHandler);
    VideoHandler.enabled = !VideoHandler.enabled;
    VideoHandler.enabled ? (e.currentTarget.innerText = '카메라 끄기') : (e.currentTarget.innerText = '카메라 켜기');
  }
  return (
    <div>
      <button style={margin} onClick={ClickMuted}>
        음소거
      </button>
      <button style={margin} onClick={ClickCamera}>
        카메라 끄기
      </button>
    </div>
  );
}
