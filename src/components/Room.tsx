import React, { RefObject } from 'react';
import PeerVideo from './atoms/PeerVideo';
import Controler from './atoms/Controler';

interface RoomProps {
  myStream: MediaStream; // 이 부분은 myStream의 타입을 정의해야 합니다.
  hidden: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  PeervideoRef: RefObject<HTMLVideoElement>;
}

export default function Room({ myStream, hidden, videoRef, PeervideoRef }: RoomProps) {
  const style = {
    display: 'flex',
  };

  return (
    <div hidden={hidden}>
      <div style={style}>
        <PeerVideo videoRef={videoRef} />
        <PeerVideo videoRef={PeervideoRef} />
      </div>
      <Controler myStream={myStream} />
    </div>
  );
}
