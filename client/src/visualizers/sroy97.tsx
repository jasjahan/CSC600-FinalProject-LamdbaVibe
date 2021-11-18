/*
    Author: Saptarshi Roy
    GitHub Handle: sroy97

    sroy97.tsx: string waveform visualizer
*/

// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const StringVisualizer = new Visualizer(
    'String Waveform',
    (p5: P5, analyzer: Tone.Analyser) => {
    
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        
        p5.background(0, 0, 0, 210); 
        p5.stroke(255,0,127);
        p5.strokeWeight(3) 
        p5.noFill(); 

        p5.beginShape();

        const values = analyzer.getValue(); 
        values.forEach((val, i) => {
          let amp = values[i] as number
          let x = p5.map(i * 500 , values.length - 1, 0, p5.height, 0)
          let y = height / 4 + amp * height
          p5.vertex(x,y)
        });

        p5.endShape();

    },
  );
