import React from 'react';
import v4 from 'uuid/v4';
import Input from './Input';
import { ChanceRow } from './styled/styled-tables';
import { QualityRatios } from '../lib/types/chord-types';
import { StyledButton } from './styled/styled-buttons';

interface Props {
  updateQualities(chordQualities: QualityRatios): void,
};

interface State {
  m3: number,
  M3: number,
  P4: number,
  d5: number,
  P5: number,
  A5: number,
  T6: number,
  m7: number,
  M7: number,
  b9: number,
  T9: number,
  s9: number,
  b9s9: number,
  T11: number,
  s11: number,
  b13: number,
  T13: number,
  hash: string,
};

const initialState: State = {
  m3: 1,
  M3: 1,
  P4: 1,
  d5: 1,
  P5: 1,
  A5: 1,
  T6: 1,
  m7: 1,
  M7: 1,
  b9: 1,
  T9: 1,
  s9: 1,
  b9s9: 1,
  T11: 1,
  s11: 1,
  b13: 1,
  T13: 1,
  hash: v4(),
};

export default class ChordQualities extends React.Component<Props, State> {
  state = initialState;

  componentDidUpdate({ updateQualities }: Props, prevState: State) {
    if (prevState.hash !== this.state.hash) {
      const {
        m3, M3, P4, d5, P5, A5, T6, m7, M7, b9, T9, s9, b9s9, T11, s11, b13, T13,
      } = this.state;
      updateQualities({
        third: [m3, M3, P4],
        fifth: [d5, P5, A5],
        seventh: [T6, m7, M7],
        ninth: [b9, T9, s9, b9s9],
        eleventh: [T11, s11],
        thirteenth: [b13, T13],
      })
    }
  }

  handleReset = () => {
    this.setState(initialState);
  };

  render() {
    const {
      m3, M3, P4, d5, P5, A5, T6, m7, M7, b9, T9, s9, b9s9, T11, s11, b13, T13, hash,
    } = this.state;
    return (
      <tbody>
        <ChanceRow>
          <td rowSpan={2}>3rd</td>
          <td>-</td>
          <td>M</td>
          <td>4</td>
          <td></td>
        </ChanceRow>
        <ChanceRow>
          <td>
            <Input
              value={m3}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                m3: v,
              })}
            />
          </td>
          <td>
            <Input
              value={M3}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                M3: v,
              })}
            />
          </td>
          <td>
            <Input
              value={P4}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                P4: v,
              })}
            />
          </td>
          <td>
            <StyledButton
              onClick={this.handleReset}
            >
              reset all ratios
            </StyledButton>
          </td>
        </ChanceRow>
        <ChanceRow>
          <td rowSpan={2}>5th</td>
          <td>b5</td>
          <td>5</td>
          <td>#5</td>
          <td></td>
        </ChanceRow>
        <ChanceRow>
          <td>
            <Input
              value={d5}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                d5: v,
              })}
            />
          </td>
          <td>
            <Input
              value={P5}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                P5: v,
              })}
            />
          </td>
          <td>
            <Input
              value={A5}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                A5: v,
              })}
            />
          </td>
          <td></td>
        </ChanceRow>  
        <ChanceRow>
          <td rowSpan={2}>7th</td>
          <td>6</td>
          <td>m7</td>
          <td>M7</td>
          <td></td>
        </ChanceRow>
        <ChanceRow>
          <td>
            <Input
              value={T6}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                T6: v,
              })}
            />
          </td>
          <td>
            <Input
              value={m7}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                m7: v,
              })}
            />
          </td>
          <td>
            <Input
              value={M7}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                M7: v,
              })}
            />
          </td>
          <td></td>
        </ChanceRow>    
        <ChanceRow>
          <td rowSpan={2}>9th</td>
          <td>b9</td>
          <td>9</td>
          <td>#9</td>
          <td>b9 {'&'} #9</td>
        </ChanceRow>
        <ChanceRow>
          <td>
            <Input
              value={b9}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                b9: v,
              })}
            />
          </td>
          <td>
            <Input
              value={T9}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                T9: v,
              })}
            />
          </td>
          <td>
            <Input
              value={s9}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                s9: v,
              })}
            />
          </td>
          <td>
            <Input
              value={b9s9}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                b9s9: v,
              })}
            />
          </td>
        </ChanceRow>    
        <ChanceRow>
          <td rowSpan={2}>11th</td>
          <td></td>
          <td>11</td>
          <td>#11</td>
          <td></td>
        </ChanceRow>
        <ChanceRow>
          <td></td>
          <td>
            <Input
              value={T11}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                T11: v,
              })}
            />
          </td>
          <td>
            <Input
              value={s11}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                s11: v,
              })}
            />
          </td>
          <td></td>
        </ChanceRow>    
        <ChanceRow>
          <td rowSpan={2}>13th</td>
          <td>b13</td>
          <td>13</td>
          <td></td>
          <td></td>
        </ChanceRow>
        <ChanceRow>
          <td>
            <Input
              value={b13}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                b13: v,
              })}
            />
          </td>
          <td>
            <Input
              value={T13}
              update={(v: number) => this.setState({
                ...this.state,
                hash: v4(),
                T13: v,
              })}
            />
          </td>
          <td></td>
          <td></td>
        </ChanceRow>
      </tbody>
    );
  }
}
