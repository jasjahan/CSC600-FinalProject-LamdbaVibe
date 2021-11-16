/*
    Author: Jasmine Jahan
    GitHub Handle: jasjahan
    Jasjahan.tsx: Adding a spectrum line waveform visualizer
*/

// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';




export const SpectrumVisualizer = new Visualizer(
  'Spectrum',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
 
    
    p5.background("blue");
    p5.strokeWeight(dim * 0.01);
    p5.stroke(100, 250, 100, 255);
    p5.noFill();
   

   
    p5.beginShape();
    
    let values = analyzer.getValue();
    for (let i = 0; i < values.length; i++) {
     
      let amplitude = values[i] as number;
      let x = p5.map(100 + amplitude * 500, 0, values.length , 0, width);
      let y = Math.tan(i) * 50+ Math.tan(i) * 50; 
      p5.vertex(x, y);
    
    }
    p5.endShape();

  },
);


