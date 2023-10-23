import React, { useEffect, useState, useRef } from 'react';
import useDidUpdatingEffect from '@/hooks/UseDidupdatingEffect';
import { socket } from '@/utils/socket';
export default function Sex() {
  const [hidden, setHidden] = useState<boolean>(true);
  const MediaRef = useRef<MediaStream>();
  const myPeerConnection = useRef<RTCPeerConnection>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const PeervideoRef = useRef<HTMLVideoElement>(null!);
  const EnterVideoRef = useRef<HTMLVideoElement>(null!);
  const roomname = '2';

  // 내 컴퓨터에서 Video와 Audio 가져오기
  const getMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    console.log('getmedia', stream);
    MediaRef.current = stream;
    videoRef.current.srcObject = stream;
    console.log(stream.getVideoTracks());
    console.log('getMedia');
  };

  // Socket 부분
  function joinRoom() {
    socket.emit('joinRoom', roomname);

    console.log('JoinRoom', roomname);
  }

  function makeConnection() {
    myPeerConnection.current = new RTCPeerConnection();

    myPeerConnection.current.addEventListener('icecandidate', handleIce);
    myPeerConnection.current.addEventListener('track', handleTrack);
    console.log('MakeConnection 부분', myPeerConnection.current);
    if (MediaRef.current) {
      MediaRef.current.getTracks().forEach((track) => {
        if (myPeerConnection.current) {
          myPeerConnection.current.addTrack(track, MediaRef.current!);
        }
      });
    }
  }

  function handleIce(data: RTCPeerConnectionIceEvent) {
    console.log('Ice Candidate을 보냄');
    const ice = data.candidate;
    const room = roomname;
    if (ice) {
      socket.emit('ice', { room, ice });
      console.log(myPeerConnection.current);
    }
  }

  function handleTrack(data: RTCTrackEvent) {
    PeervideoRef.current.srcObject = data.streams[0];
  }

  function PushOffer() {
    socket.on('welcome', async (room: string) => {
      if (myPeerConnection.current) {
        const offer = await myPeerConnection.current.createOffer();
        myPeerConnection.current.setLocalDescription(offer);
        console.log('Peer A send offer');
        socket.emit('call-user', { room, offer });
      }
    });
  }

  function PushAnswer() {
    socket.on('call-made', async (offer: RTCSessionDescription, room: string) => {
      if (myPeerConnection.current) {
        console.log('offer 받음');
        myPeerConnection.current.setRemoteDescription(offer);
        const answer = await myPeerConnection.current.createAnswer();
        myPeerConnection.current.setLocalDescription(answer);
        console.log('Answer 보냄');
        socket.emit('call-answer', { room, answer });
      }
    });
  }

  function GetAnswer() {
    socket.on('answer-get', async (answer: RTCSessionDescription, room: string) => {
      if (myPeerConnection.current) {
        console.log('answer을 받음');
        myPeerConnection.current.setRemoteDescription(answer);
      }
    });
  }

  function Ice() {
    socket.on('ice', async (ice: RTCIceCandidate, room: string) => {
      console.log('iceCandidate을 받음');
      // iceCandidate을 처리하는 로직 추가
    });
  }

  useDidUpdatingEffect(() => {
    async function test() {
      socket.emit('leave', roomname);
      await getMedia();
      makeConnection();
      joinRoom();
      PushOffer();
      PushAnswer();
      GetAnswer();
      Ice();
    }
    test();
  }, []);

  // 여기까지 Socket 부분 //

  // mute=true 나오는 부분 해결//
  function ClickCamera(e: React.MouseEvent<HTMLButtonElement>) {
    const VideoHandler = MediaRef.current!.getVideoTracks()[0];
    console.log(MediaRef.current!.getTracks());
    console.log(VideoHandler);
    VideoHandler.enabled = !VideoHandler.enabled;
    VideoHandler.enabled ? (e.currentTarget.innerText = '카메라 끄기') : (e.currentTarget.innerText = '카메라 켜기');
  }

  function Enter() {
    socket.emit('leave', roomname);
    console.log(socket.id, '가 방을 떠났습니다.');
    socket.emit('joinRoom', roomname);
    setHidden(!hidden);
  }

  return (
    <div>
      <div id="Enter" hidden={!hidden}>
        <video ref={videoRef} autoPlay={true} muted={true} playsInline={true} width={400} height={400} />
        <button onClick={ClickCamera}>카메라 끄기</button>
        <button onClick={Enter}>입장</button>
      </div>

      <div hidden={hidden}>
        <div id="myStream" className="flex justify-around w-full">
          <video ref={videoRef} autoPlay={true} muted={true} playsInline={true} className="w-1/3" />
          <video ref={PeervideoRef} autoPlay={true} muted={true} playsInline={true} className="w-1/3" />
        </div>
        <button onClick={ClickCamera} style={{ width: '100px', height: '40px', border: '1px solid black' }}>
          카메라 끄기
        </button>
      </div>
    </div>
  );
}
