import React,{Component, useEffect, useState}  from "react";
import { Instrument } from "../Instruments"
import "./Drums.css"
function Drums()
{
    const [audio,setaudio] = useState("");
    const [playAudio,setPlayAudio] = useState(false);
    const audioPlayer = new Audio(audio);
    useEffect(()=>{
        document.addEventListener('keydown', (keyPressed) => {
            if(keyPressed.key=="w")
            {
            setaudio("/drumsounds/clap.wav");
            setPlayAudio(true);
            }
            if(keyPressed.key=="a")
            {
            setaudio("/drumsounds/crash.wav");
            setPlayAudio(true);
            }
            if(keyPressed.key=="s")
            {
            setaudio("/drumsounds/open-hihat.wav");
            setPlayAudio(true);
            }
            if(keyPressed.key=="d")
            {
            setaudio("/drumsounds/kick.wav");
            setPlayAudio(true);
            }
            if(keyPressed.key=="o")
            {
            setaudio("/drumsounds/snare.wav");
            setPlayAudio(true);
            }
            if(keyPressed.key=="p")
            {
            setaudio("/drumsounds/closed-hihat.wav");
            setPlayAudio(true);
            }
          }, false);
        document.addEventListener('keyup',()=>{
            setPlayAudio(false);
        })
        if(playAudio && audio!="")
        {
        audioPlayer.play().then(()=>{
            setPlayAudio(false);
        });
        }
        //audioPlayer.play();
    },[playAudio]);
    return(
        <body tabIndex={0}>
            <div className="drumkit">
                <div className="pad"  onClick={()=>{
                    setaudio("/drumsounds/clap.wav");
                    setPlayAudio(true);
                }}>
                    <img src="/icons/clap.png" alt="clap"/>
                </div>
                <div className="pad"  onClick={()=>{
                    setaudio("/drumsounds/crash.wav");
                    setPlayAudio(true);
                }}>
                <img src="/icons/crash.png" alt="crash"/>
                </div>
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/open-hihat.wav");
                    setPlayAudio(true);
                }}>
                <img src="/icons/open-hihat.png" alt="open-hihat"/>
                </div>
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/kick.wav");
                    setPlayAudio(true);
                }}>
                <img src="/icons/kick.png" alt="kick"/>
                </div>
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/snare.wav");
                    setPlayAudio(true);
                }}>
                <img src="/icons/snare.png" alt="snare"/>
                </div>
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/closed-hihat.wav");
                    setPlayAudio(true);
                }}>
                <img src="/icons/closed-hihat.png" alt="closed-hihat"/>
                </div>
            </div>
        </body>
    )
};

export const DrumsInstrument = new Instrument("Drums",Drums);