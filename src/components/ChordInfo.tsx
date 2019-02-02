import React from 'react';
import { ReadableChord } from '../lib/chord-calculator';

interface Props {
  rootNote: string,
  readableChord: ReadableChord,
};

const ChordInfo = ({rootNote, readableChord}: Props) => (
  <table>
    <tbody>
    <tr>
      <td>root</td>
      <td>third</td>
      <td>fifth</td>
      <td>seventh</td>
      <td>ninth</td>
      <td>eleventh</td>
      <td>thirteenth</td>
    </tr>
    <tr>
      <td>{rootNote}</td>
      <td>{readableChord.third}</td>
      <td>{readableChord.fifth}</td>
      <td>{readableChord.seventh}</td>
      <td>{readableChord.ninth}</td>
      <td>{readableChord.eleventh}</td>
      <td>{readableChord.thirteenth}</td>
    </tr>
    </tbody>
  </table>
);

export default ChordInfo;

