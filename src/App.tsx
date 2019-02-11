import React, { FunctionComponent, useState } from 'react';
import './App.css';

import ChordInfo from './components/ChordInfo';
import ValueControls from './components/ValueControls';
import { ChanceTable } from './components/styled/styled-tables';
import { StyledButton } from './components/styled/styled-buttons';

import {
  ChanceOfPlaying,
  chordCalculator,
  generateRoot,
  getNote,
  getReadableChord,
  ReadableChord
} from './lib/chord-calculator';

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
          <tbody>
            <ChordInfo
              readableChord={output.chord}
              rootNote={output.root}
            />
            <ValueControls
              updateChance={(newChance: ChanceOfPlaying) => setChance(newChance)}
            />
          </tbody>
        </ChanceTable>
      </main>
    </div>
  );
}

export default App;
