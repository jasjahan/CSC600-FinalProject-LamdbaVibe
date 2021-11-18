import React,{Component, useEffect, useState}  from "react";
import { Instrument } from "../Instruments";
import "./Flute.css";
import * as Tone from 'tone';
function Flute()
{
    const fluteIcons=["bansuri.png",
                      "basoon.png",
                      "oboe.png",
                      "piccolo.png",
                      "sehnai.png",
                      "pan_flute.png",
                      "long_basoon.png",
                      "ornate.png",
                      "horn.png"]
    const tonePlayers=["/FluteSounds/flute-1.wav",
                       "/FluteSounds/flute-2.wav",
                       "/FluteSounds/flute-3.wav",
                       "/FluteSounds/flute-4.wav",
                       "/FluteSounds/flute-5.wav",
                       "/FluteSounds/flute-6.wav",
                       "/FluteSounds/flute-7.wav",
                       "/FluteSounds/flute-8.wav",
                       "/FluteSounds/flute-9.wav"]
    const [properties,setProperties] = useState([{
        playBackRate: 1,
        volume: 1,
        reverb: 0.65,
        steroe: 0.5
    },{
        playBackRate: 1,
        volume: 1,
        reverb: 0.45,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.60,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.50,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.60,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.60,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.75,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.75,
        steroe: 0.5
    },
    {
        playBackRate: 1,
        volume: 1,
        reverb: 0.75,
        steroe: 0.5
    }])
            
    function PlaySound(index: any) : void
    {
        console.log("play");
        const tonePlayer = new Tone.Player(tonePlayers[index]);
        tonePlayer.autostart=true;
        tonePlayer.playbackRate=properties[index].playBackRate;
        if(properties[index].volume==0)
        {
            tonePlayer.mute=true;
        }
        else
        {
            tonePlayer.mute=false;
            tonePlayer.volume.value=properties[index].volume;
        }
        if(properties[index].reverb!=0)
        {
        const Reverb = new Tone.Reverb(properties[index].reverb).toDestination();
        tonePlayer.connect(Reverb);
        }
        if(properties[index].steroe>=0)
        {
            const Stereo = new Tone.StereoWidener(properties[index].steroe/2).toDestination();
            tonePlayer.connect(Stereo);
        }
        tonePlayer.toDestination();
    }

    return(
        <body tabIndex={0}>
            <div className="flutekit">
            {
                        fluteIcons.map((icon,index)=>{
                            return(
                                <div className="padcontainer">
                <div className="pad"  onClick={()=>{
                    console.log("Test");
                    PlaySound(index);
                }}>
                    <img className="icon" src={"/FluteIcons/"+icon} />
                </div>
                    <label>Playback Rate</label>
                    <input type="range" min="0" max="5" value={properties[index].playBackRate} onChange={(value)=>{
                        setProperties(properties.map((property,propertyIndex)=>{
                            if(propertyIndex===index)
                            {
                            property.playBackRate=Number.parseInt(value.target.value)
                            }
                            return(
                                property
                            )
                        }))
                    }}/>
                    <label>Volume</label>
                    <input type="range" min="0" max="10" value={properties[index].volume} onChange={(value)=>{
                        setProperties(properties.map((property,propertyIndex)=>{
                            if(propertyIndex===index)
                            {
                            property.volume=Number.parseInt(value.target.value)
                            }
                            return(
                                property
                            )
                        }))
                    }}/>
                    <label>Reverb</label>
                    <input type="range" min="0" max="10" value={properties[index].reverb} onChange={(value)=>{
                        setProperties(properties.map((property,propertyIndex)=>{
                            if(propertyIndex===index)
                            {
                            property.reverb=Number.parseInt(value.target.value)
                            }
                            return(
                                property
                            )
                        }))
                    }}/>
                    <label>Stereo</label>
                    <input type="range" min="0" step={1} max="2" value={properties[index].steroe} onChange={(value)=>{
                        setProperties(properties.map((property,propertyIndex)=>{
                            if(propertyIndex===index)
                            {
                            property.steroe=Number.parseInt(value.target.value);
                            }
                            return(
                                property
                            )
                        }))
                    }}/>
                    </div>
                            )
                        })
                    }
            </div>
        </body>
    )
};

export const FluteInstrument = new Instrument("Flute",Flute);
