import React,{useEffect,useState,useRef,createContext} from 'react'
import {io} from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()
const socket  = io('http://localhost:5000')

const ContextProvider = ({ childern })=>{
    const [stream, setstream] = useState(null);
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then((currentStream)=>{
            setstream(currentStream)
        })
    })

    const answerCall = ()=>{

    }

    const callUser = ()=>{

    }
    const leaveCall = ()=>{

    }
}