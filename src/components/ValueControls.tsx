import React from 'react';
import Input from './Input';
import { ChanceOfPlaying } from '../lib/chord-calculator';

interface Props {
  updateChance(chance: ChanceOfPlaying | null): void,
};

interface State {
  completelyRandom: boolean,
  chance: ChanceOfPlaying,
  hash: number,
};

const initialChance = {
  fifth: 50,
  seventh: 50,
  ninth: 50,
  eleventh: 50,
  thirteenth: 50,
};

export default class ValueControls extends React.Component<Props, State> {
  state = {
    completelyRandom: true,
    chance: initialChance,
    hash: Math.random(),
  };

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.hash !== this.state.hash) {
      if (this.state.completelyRandom) {
        this.props.updateChance(null);
      } else {
        this.props.updateChance(this.state.chance);
      }
    }
  }

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked } = target;
    this.setState({
      ...this.state,
      completelyRandom: checked,
      hash: Math.random(),
    });
  };

  render() {
    return (
      <React.Fragment>
        <tr className='chance-row'>
          <td>
            <label>
              all random
            <input
                name='random'
                id='random_id'
                type='checkbox'
                checked={this.state.completelyRandom}
                onChange={(e) => this.handleCheckboxChange(e)}
              />
            </label>
          </td>
          <td></td>
          <td>
            <Input
              disabled={this.state.completelyRandom}
              value={this.state.chance.fifth}
              update={(v: number) => this.setState({
                ...this.state,
                hash: Math.random(),
                chance: {
                  ...this.state.chance,
                  fifth: v,
                },
              })}
              />
          </td>
          <td>
            <Input
              disabled={this.state.completelyRandom}
              value={this.state.chance.seventh}
              update={(v: number) => this.setState({
                ...this.state,
                hash: Math.random(),
                chance: {
                  ...this.state.chance,
                  seventh: v,
                },
              })}
              />
          </td>
          <td>
            <Input
              disabled={this.state.completelyRandom}
              value={this.state.chance.ninth}
              update={(v: number) => this.setState({
                ...this.state,
                hash: Math.random(),
                chance: {
                  ...this.state.chance,
                  ninth: v,
                },
              })}
            /> 
          </td>
          <td>
            <Input
              disabled={this.state.completelyRandom}
              value={this.state.chance.eleventh}
              update={(v: number) => this.setState({
                ...this.state,
                hash: Math.random(),
                chance: {
                  ...this.state.chance,
                  eleventh: v,
                },
              })}
              /> 
          </td>
          <td>
            <Input
              disabled={this.state.completelyRandom}
              value={this.state.chance.thirteenth}
              update={(v: number) => this.setState({
                ...this.state,
                hash: Math.random(),
                chance: {
                  ...this.state.chance,
                  thirteenth: v,
                },
              })}
              /> 
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
