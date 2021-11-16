// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
import styles from './Xylo.module.css'; // Import css modules stylesheet as styles


// project imports
import { Instrument, InstrumentProps } from '../Instruments';


const PlayButton = (props:any)=>{

    return(
        <button 
         className = {styles.playbutton}
         style = {{height: ( 200 - (15 * props.index )) + 'px'}}
         onClick= {()=> new Audio(props.notes.file).play()}> 

         <div className = {styles.circle}/>
            {props.notes.name} 
         <div className = {styles.circle}/>
        </button>
    );
}

export function Xylophone() {

    const notes = [
                            
        {
            name: 'c',
            file: '/XyloSounds/c.wav'
          },
          {
            name: 'd1',
            file: '/XyloSounds/d1.wav'
          },
          {
            name: 'e1',
            file: '/XyloSounds/e1.wav'
          },
          {
            name: 'f',
            file: '/XyloSounds/f.wav'
          },
          {
            name: 'g',
            file: '/XyloSounds/g.wav'
          },
          {
            name: 'a',
            file: '/XyloSounds/a.wav'
          },
          {
            name: 'b',
            file: '/XyloSounds/b.wav'
          },
          {
            name: 'c2',
            file: '/XyloSounds/c2.wav'
          },                  ]; 

                         
    return (
    <body > 
           
    <div className= {styles.page}>
        <h1> Xylophone </h1>  
        <li>  </li>
        <div className= {styles.xylophone}>

          {notes.map((notes,index)=> <PlayButton index = {index} key = {notes.name} notes = {notes} />)}

          {/* <PlayButton notes = {notes[0]}/>
          <PlayButton notes = {notes[1]}/>
          <PlayButton notes = {notes[2]}/>
          <PlayButton notes = {notes[3]}/>
          <PlayButton notes = {notes[4]}/>
          <PlayButton notes = {notes[5]}/>
          <PlayButton notes = {notes[6]}/>
          <PlayButton notes = {notes[7]}/> */}

          {/* <button onClick = {()=> new Audio(notes[0].file).play()}>c</button>
          <button onClick = {()=> new Audio(notes[1].file).play()}>d1</button>
          <button onClick = {()=> new Audio(notes[2].file).play()}>e1</button>
          <button onClick = {()=> new Audio(notes[3].file).play()}>f</button>
          <button onClick = {()=> new Audio(notes[4].file).play()}>g</button>
          <button onClick = {()=> new Audio(notes[5].file).play()}>a</button>
          <button onClick = {()=> new Audio(notes[6].file).play()}>b</button>
          <button onClick = {()=> new Audio(notes[7].file).play()}>c2</button> */}
        </div>
      </div>
     </body> 
    );
  }
export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);

