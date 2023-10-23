import React, { RefObject } from 'react';
import Controler from './atoms/Controler';
import PeerVideo from './atoms/PeerVideo';

interface AlertProps {
  confirm: boolean;
  onbuttonClick: () => void;
  myStream: MediaStream; // 이 부분은 myStream의 타입을 정의해야 합니다.
  confirmVideo: RefObject<HTMLVideoElement>;
}

export default function Alert({ confirm, onbuttonClick, myStream, confirmVideo }: AlertProps) {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <div id='confirm' hidden={confirm}>
        <PeerVideo videoRef={confirmVideo} />
        <div id='confirm_button' style={flexStyle}>
          <Controler myStream={myStream} />
          <button onClick={onbuttonClick}>입장</button>
        </div>
      </div>
    </div>
  );
}
