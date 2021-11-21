// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const BarCircleVisualizer = new Visualizer(
  'Bar Circle Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    const colors = [
        {
            red : 255,
            green: 51,
            blue: 51,
        },
        {
            red : 51,
            green: 51,
            blue: 255,
        },
        {
            red : 255,
            green: 51,
            blue: 153,
        },
        {
            red : 255,
            green: 51,
            blue: 51,
        },
        {
            red : 102,
            green: 255,
            blue: 178,
        },
        {
            red : 255,
            green: 255,
            blue: 153,
        }
    ]

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    
    const values = analyzer.getValue();
    p5.beginShape();
    const spacing = width/ values.length;
    let i=0;
    while(i<values.length) {
        let sumAmplitude = 0;
      for(let j=i;j<i+5;j++)
      {
          sumAmplitude+=values[j] as number;
      }
      sumAmplitude = sumAmplitude < 0 ? -sumAmplitude : sumAmplitude;
      sumAmplitude=Math.min(sumAmplitude,0.5);
      let randomIndex  = Math.floor(Math.random()*5);
      p5.fill(colors[randomIndex].red,colors[randomIndex].green,colors[randomIndex].blue,255);
      p5.rect(i*spacing, height *0.8, spacing*5, -(sumAmplitude * height/4));
      p5.rect(i*spacing,height*0.2,spacing*5,sumAmplitude*height/4);
      //p5.circle(width/2.5,height/2,sumAmplitude*height/2);
      p5.triangle(width/2.5-(sumAmplitude*width/2),height*0.75,width/2.5+(sumAmplitude*width/2),height*0.75,width/2.5,height/2-sumAmplitude*height);
      p5.triangle(width/2.5-(sumAmplitude*width/2),height*0.25,width/2.5+(sumAmplitude*width/2),height*0.25,width/2.5,height/2+sumAmplitude*height);
      i+=5;
      //p5.vertex(x, y);
    }
    p5.endShape();
  },
);
