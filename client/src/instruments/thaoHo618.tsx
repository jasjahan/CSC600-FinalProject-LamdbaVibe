// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import './Kalimba.css';


export function Kalimba() {
  const notes = [];

  return (
    <body>
        <div className = {'page'}>
            <h1> Kalimba </h1>
            <div className = {'kalimba'}>
                {/* maps notes */}
            </div>

        </div>
        
    </body>
  );

}

export const KalimbaInstrument = new Instrument("Kalimba", Kalimba);
