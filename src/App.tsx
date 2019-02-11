import React, { FunctionComponent, useState } from 'react';
import './App.css';

import ChordInfo from './components/ChordInfo';
import Expandable from './components/Expandable';
import ValueControls from './components/ValueControls';
import { ChanceTable, ChanceHeader } from './components/styled/styled-tables';
import { StyledButton } from './components/styled/styled-buttons';

import { getNote } from './lib/translate-notes';

import {
  chordCalculator,
  generateRoot,
  getReadableChord,
} from './lib/chord-calculator';

import {
  ChanceOfPlaying,
  ReadableChord
} from './lib/types/chord-types';

interface ChordOutput {
  root: string,
  chord: ReadableChord,
};

type Chance = ChanceOfPlaying | null;

interface State {
  chance: Chance,
  output: ChordOutput, 
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
}

const initialState: State = {
  chance: null,
  output: initialOutput,
};

const randomize = (chance: ChanceOfPlaying | null): ChordOutput => ({
  root: getNote(generateRoot()),
  chord: getReadableChord(chordCalculator(chance || undefined)),
});

const App: FunctionComponent<{state?: State}> = ({ state = initialState }) => {
  const [chance, setChance] = useState(state.chance);
  const [output, setOutput] = useState(state.output);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>random chord generator</h1>
      </header>
      <main>
        <StyledButton
          onClick={() => setOutput(randomize(chance))}
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
            <ValueControls
              updateChance={(newChance: ChanceOfPlaying) => setChance(newChance)}
            />
          </ChanceTable>
        </Expandable>
      </main>
    </div>
  );
}

export default App;
