import React,{Component, useEffect, useState}  from "react";
import { Instrument } from "../Instruments"
import "./Drums.css"
import * as Tone from 'tone';
function Drums()
{
    const [audio,setaudio] = useState("");
    const [playAudio,setPlayAudio] = useState(false);
    const tonePlayers=[new Tone.Player("/drumsounds/clap.wav"),new Tone.Player("/drumsounds/crash.wav"),new Tone.Player("/drumsounds/open-hihat.wav"),new Tone.Player("/drumsounds/kick.wav"),new Tone.Player("/drumsounds/snare.wav"),new Tone.Player("/drumsounds/closed-hihat.wav")]
    useEffect(()=>{
            
        if(playAudio && audio!="")
        {
            tonePlayers[0].playbackRate=1;
            tonePlayers[0].fadeIn=0;
            tonePlayers[0].toDestination();
            tonePlayers[0].autostart=true;
        /*audioPlayer.play().then(()=>{
            setPlayAudio(false);
        });*/
        setPlayAudio(false);
        }
        //audioPlayer.play();
    },[playAudio]);
    return(
        <body tabIndex={0}>
            <div className="drumkit">
                <div className="padcontainer">
                <div className="pad"  onClick={()=>{
                    setaudio("/drumsounds/clap.wav");
                    setPlayAudio(true);
                }}>
                    <img className="icon" src="/icons/clap.png" alt="clap"/>
                </div>
                <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                    </div>
                    <div className="padcontainer">
                <div className="pad"  onClick={()=>{
                    setaudio("/drumsounds/crash.wav");
                    setPlayAudio(true);
                }}>
                <img className="icon" src="/icons/crash.png" alt="crash"/>
                </div>
                    <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                </div>
                <div className="padcontainer">
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/open-hihat.wav");
                    setPlayAudio(true);
                }}>
                <img className="icon" src="/icons/open-hihat.png" alt="open-hihat"/>
                </div>
                    <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                </div>
                <div className="padcontainer">
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/kick.wav");
                    setPlayAudio(true);
                }}>
                <img className="icon" src="/icons/kick.png" alt="kick"/>
                </div>
                    <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                </div>
                <div className="padcontainer">
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/snare.wav");
                    setPlayAudio(true);
                }}>
                <img className="icon" src="/icons/snare.png" alt="snare"/>
                </div>
                    <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                </div>
                <div className="padcontainer">
                <div className="pad" onClick={()=>{
                    setaudio("/drumsounds/closed-hihat.wav");
                    setPlayAudio(true);
                }}>
                <img className="icon" src="/icons/closed-hihat.png" alt="closed-hihat"/>
                </div>
                    <label>Fade In</label>
                <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Fade Out</label>
                    <input type="range" min="0" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Playback Rate</label>
                    <input type="range" min="1" max="5" onChange={(value)=>{
                        console.log(value.target.value);
                    }}/>
                    <label>Loop</label>
                    <input type="checkbox"/>
                </div>
            </div>
        </body>
    )
};

export const DrumsInstrument = new Instrument("Drums",Drums);