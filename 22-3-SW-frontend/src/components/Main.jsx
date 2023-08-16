import React from 'react';
import './Main.css'
import { useState, useRef, useContext } from 'react';
import Mycontext from './context/Mycontext';
import useDidupdatingEffect from './hook/UseDidupdatingEffect';
import Alert from './Alert';
import Room from './Room';


export default function Main() {

  const [myStream, setmyStream]=useState(null);
  // const myStream = useRef();
  const myPeerConnection = useRef(null);
  const confirmVideo = useRef(null);
  const videoRef = useRef(null);
  const PeervideoRef = useRef(null);
  const Peerstream = useRef(null);
  const [confirm, setconfirm] = useState(false);
  const {hidden,socket, roomname} = useContext(Mycontext);

// 내 컴퓨터에서 Video와 Audio 가져오기//
  const getMedia = async()=>{
      const Stream =  await navigator.mediaDevices.getUserMedia({video: true, audio: true});
      setmyStream(Stream);
      if (videoRef && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = Stream;
        confirmVideo.current.srcObject = Stream;
      }
      console.log(myStream);
      console.log(Stream.getVideoTracks())
    }    
//

  
// Socket 부분//


  function joinRoom(){
    if(roomname.current == null || roomname.current ==""){
    }else{socket.emit("joinRoom",roomname.current)}
    console.log(roomname.current)
  
  }

  function makeConnection(){
      myPeerConnection.current = new RTCPeerConnection({
        iceServers: [
          {
            urls: ["stun:stun.l.google.com:19302"
            ],
          },
        ],
      });
        
      myPeerConnection.current.addEventListener("icecandidate", handleIce);
      myPeerConnection.current.addEventListener("track", handleTrack);
      console.log(myPeerConnection.current)
      if(myStream){
      myStream.getTracks().forEach((track)=>myPeerConnection.current.addTrack(track,
        myStream))
        console.log(myPeerConnection.current)
      }

  }


  function handleIce(data){
    console.log("Ice Candidate을 보냄")
    console.log(data);
    console.log(data.candidate);
    const ice = data.candidate
    const room = roomname.current
    if(ice){
    socket.emit("ice", {room, ice})
    console.log(myPeerConnection.current)
  }
  }

  function handleTrack(data) {
    PeervideoRef.current.srcObject = data.streams[0];
    console.log(data.streams[0])
    Peerstream.current = data.streams[0]
    
  }

  function PushOffer(){
    socket.on("welcome", async(room)=>{
      const offer = await myPeerConnection.current.createOffer();
      myPeerConnection.current.setLocalDescription(offer);
      console.log("Peer A send offer")
      socket.emit("call-user", {room, offer})
     })
    }

  function PushAnswer(){
    socket.on("call-made", async(offer, room)=>{
      console.log("offer 받음")
      myPeerConnection.current.setRemoteDescription(offer);
      const answer = await myPeerConnection.current.createAnswer();
      myPeerConnection.current.setLocalDescription(answer);
      console.log("Answer 보냄")
      socket.emit("call-answer", {room,answer})
     })
  }

  function GetAnswer(){

    socket.on("answer-get", async(answer, room)=>{
      console.log("answer을 받음")
      myPeerConnection.current.setRemoteDescription(answer);
     })
  }


  function Ice(){
    socket.on("ice", async(ice, room)=>{
      console.log("iceCandidate을 받음")
     })
  }

  
  useDidupdatingEffect(()=>{
   getMedia() 
    
  },[hidden])

  useDidupdatingEffect(()=>{
    makeConnection();
    joinRoom();
    PushOffer();
    PushAnswer(); 
    GetAnswer();
    Ice();

  },[myStream])

// 여기까지 Socket 부분 //


// mute=true 나오는 부분 해결//
  function back(){
    const room = roomname.current
    socket.emit("leave", room)
    console.log(socket.id,"가 방을 떠났습니다.")
    socket.emit('joinRoom',room)
    setconfirm(true);
    console.log(confirm)
  }
//


    return (
      <div>
        <div id='myStream' hidden={!hidden}>
        <Alert confirm={confirm} onbuttonClick={back} myStream={myStream}  confirmVideo={confirmVideo} />
        <Room myStream={myStream} hidden={!confirm} videoRef={videoRef} PeervideoRef={PeervideoRef}/>
        </div>
    </div>
  );
}

