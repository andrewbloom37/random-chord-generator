import React from 'react';
import { ReadableChord } from '../lib/chord-calculator';

interface Props {
  rootNote: string,
  readableChord: ReadableChord,
};

const ChordInfo = ({ rootNote, readableChord }: Props) => (
  <React.Fragment>
    <tr className='chance-row'>
      <td>root</td>
      <td>third</td>
      <td>fifth</td>
      <td>seventh</td>
      <td>ninth</td>
      <td>eleventh</td>
      <td>thirteenth</td>
    </tr>
    <tr className='chance-row'>
      <td>{rootNote}</td>
      <td>{readableChord.third}</td>
      <td>{readableChord.fifth}</td>
      <td>{readableChord.seventh}</td>
      <td>{readableChord.ninth}</td>
      <td>{readableChord.eleventh}</td>
      <td>{readableChord.thirteenth}</td>
    </tr>
  </React.Fragment>
);

export default ChordInfo;

