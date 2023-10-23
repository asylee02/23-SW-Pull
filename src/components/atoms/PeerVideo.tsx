import React, { RefObject } from 'react';

interface PeerVideoProps {
  videoRef: RefObject<HTMLVideoElement>;
}

export default function PeerVideo({ videoRef }: PeerVideoProps) {
  return (
    <div>
      <video ref={videoRef} autoPlay={true} muted={true} playsInline={true} width={400} height={400} />
    </div>
  );
}
