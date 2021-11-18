// 3rd party
import { List, Map } from 'immutable';
import { DrumsInstrument } from './instruments/Drums';
import { FluteInstrument } from './instruments/Flute';

// project dependencies
import { PianoInstrument} from './instruments/Piano';
import { XylophoneInstrument } from './instruments/Xylophone';

import { WaveformVisualizer } from './visualizers/Waveform';

import { CircleVisualizer } from './visualizers/thaoHo618'; 
import { SpectrumVisualizer} from './visualizers/Jasjahan';
import { StringVisualizer } from './visualizers/sroy97';
/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;


const instruments = List([PianoInstrument,DrumsInstrument,XylophoneInstrument,FluteInstrument]);
const visualizers = List([WaveformVisualizer,CircleVisualizer,SpectrumVisualizer,StringVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
