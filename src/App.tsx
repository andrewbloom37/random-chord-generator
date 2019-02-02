import React from 'react';
import './App.css';
import ChordInfo from './components/ChordInfo';
import {
  chordCalculator, generateRoot, getNote, getReadableChord, ReadableChord
} from './lib/chord-calculator';

// const root = ;
// const chord = ;

interface Props {};
interface State {
  root: string,
  chord: ReadableChord,
};

const initialChord = {
  third: null,
  fifth: null,
  seventh: null,
  ninth: null,
  eleventh: null,
  thirteenth: null,
};

const randomize = () => ({
  root: getNote(generateRoot()),
  chord: getReadableChord(chordCalculator()),
});

class App extends React.Component<Props, State> {
  state = {
    root: '',
    chord: initialChord,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>random chord generator</h1>
          <button
            onClick={() => this.setState(randomize())}
          >
            generate a random chord
          </button>
          <ChordInfo
            readableChord={this.state.chord}
            rootNote={this.state.root}
          />
        </header>
      </div>
    )
  }
};

export default App;
