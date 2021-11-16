// 3rd party
import { List, Map } from 'immutable';
import { DrumsInstrument } from './instruments/Drums';

// project dependencies
import { PianoInstrument} from './instruments/Piano';

import { WaveformVisualizer } from './visualizers/Waveform';

import { CircleVisualizer } from './visualizers/thaoHo618'; 
<<<<<<< HEAD

=======
import { SpectrumVisualizer} from './visualizers/Jasjahan';
>>>>>>> 8abbb7cb3c4bd0a1dece04b76a81347d1dca0b1b
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
<<<<<<< HEAD
const visualizers = List([WaveformVisualizer,CircleVisualizer]);

=======
const visualizers = List([WaveformVisualizer,CircleVisualizer,SpectrumVisualizer]);
>>>>>>> 8abbb7cb3c4bd0a1dece04b76a81347d1dca0b1b
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
