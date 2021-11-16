// 3rd party
import { List, Map } from 'immutable';
import { DrumsInstrument } from './instruments/Drums';

// project dependencies
import { PianoInstrument} from './instruments/Piano';

import { WaveformVisualizer } from './visualizers/Waveform';

import { CircleVisualizer } from './visualizers/thaoHo618'; 
import { SpectrumVisualizer} from './visualizers/Jasjahan';
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


const instruments = List([PianoInstrument,DrumsInstrument]);
const visualizers = List([WaveformVisualizer,CircleVisualizer,SpectrumVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
