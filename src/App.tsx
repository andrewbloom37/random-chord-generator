import React from 'react';
import './App.css';
import ChordInfo from './components/ChordInfo';
import ValueControls from './components/ValueControls';
import {
  ChanceOfPlaying,
  chordCalculator,
  generateRoot,
  getNote,
  getReadableChord,
  ReadableChord
} from './lib/chord-calculator';

interface State {
  chance: ChanceOfPlaying | null,
  output: {
    root: string,
    chord: ReadableChord,
  },
};

const initialChord = {
  third: '',
  fifth: null,
  seventh: null,
  ninth: null,
  eleventh: null,
  thirteenth: null,
};

const randomize = (chance: ChanceOfPlaying | null) => ({
  root: getNote(generateRoot()),
  chord: getReadableChord(chordCalculator(chance || undefined)),
});

export default class App extends React.Component<{}, State> {
  state = {
    chance: null,
    output: {
      root: '',
      chord: initialChord,
    },
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>random chord generator</h1>
        </header>
        <main>
          <button
            onClick={() => this.setState({
              ...this.state,
              output: randomize(this.state.chance),
            })}
          >
            generate a random chord
          </button>
          <table className='chance-table'>
            <tbody>
              <ChordInfo
                readableChord={this.state.output.chord}
                rootNote={this.state.output.root}
              />
              <ValueControls
                updateChance={(chance: ChanceOfPlaying) => this.setState({
                  ...this.state,
                  chance,
                })}
              />
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}
