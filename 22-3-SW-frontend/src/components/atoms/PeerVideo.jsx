import React from 'react';

export default function PeerVideo({videoRef}) {
  return (
    <div>
      <video ref={videoRef} autoPlay='true' muted="muted" playsInline width={"400"} height={"400"}/>
    </div>
  );
}

