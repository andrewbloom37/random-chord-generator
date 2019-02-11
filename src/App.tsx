import React, { FunctionComponent, useState } from 'react';
import './App.css';

import ChordQualities from './components/ChordQualities';
import Expandable from './components/Expandable';
import ChanceToPlay from './components/ChanceToPlay';
import ChordInfo from './components/ChordInfo';

import { ChanceTable, ChanceHeader, SettingsBreak } from './components/styled/styled-tables';
import { StyledButton } from './components/styled/styled-buttons';

import { getNote } from './lib/translate-notes';

import {
  chordCalculator,
  generateRoot,
  getReadableChord,
} from './lib/chord-calculator';

import {
  ChanceOfPlaying,
  ReadableChord,
  QualityRatios
} from './lib/types/chord-types';


interface ChordOutput {
  root: string,
  chord: ReadableChord,
};

type Chance = ChanceOfPlaying | null;

interface State {
  chance: Chance,
  output: ChordOutput,
  qualityRatios: QualityRatios,
};

const initialChord: ReadableChord = {
  third: '',
  fifth: null,
  seventh: null,
  ninth: null,
  eleventh: null,
  thirteenth: null,
};

const initialOutput: ChordOutput = {
  root: '',
  chord: initialChord,
};

const initialQualityRatios: QualityRatios = {
  third: [1, 1, 1],
  fifth: [1, 1, 1],
  seventh: [1, 1, 1],
  ninth: [1, 1, 1, 1],
  eleventh: [1, 1],
  thirteenth: [1, 1],
};

const initialState: State = {
  chance: null,
  output: initialOutput,
  qualityRatios: initialQualityRatios,
};

const randomize = (qualityRatios: QualityRatios, chance: ChanceOfPlaying | null): ChordOutput => ({
  root: getNote(generateRoot()),
  chord: getReadableChord(chordCalculator(qualityRatios, chance || undefined)),
});

const App: FunctionComponent<{state?: State}> = ({ state = initialState }) => {
  const [chance, setChance] = useState(state.chance);
  const [output, setOutput] = useState(state.output);
  const [qualityRatios, setQualityRatios] = useState(state.qualityRatios);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>random chord generator</h1>
      </header>
      <main>
        <StyledButton
          onClick={() => setOutput(randomize(qualityRatios, chance))}
        >
          generate a random chord
        </StyledButton>
        <ChanceTable>
          <ChordInfo
            readableChord={output.chord}
            rootNote={output.root}
          />
        </ChanceTable>
        <Expandable>
          <ChanceHeader>chance to play</ChanceHeader>
          <ChanceTable>
            <ChanceToPlay
              updateChance={(newChance: ChanceOfPlaying) => setChance(newChance)}
            />
          </ChanceTable>
          <SettingsBreak/>
          <ChanceHeader>quality probability ratios</ChanceHeader>
          <ChanceTable>
            <ChordQualities
              updateQualities={(newQualities: QualityRatios) => setQualityRatios(newQualities)}
            />
          </ChanceTable>
        </Expandable>
      </main>
    </div>
  );
}

export default App;
