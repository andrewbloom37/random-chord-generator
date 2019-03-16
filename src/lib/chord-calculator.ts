import {
  generateRandomNumber,
  generateRandomChord,
} from './generate-chords';

import {
  translateThird,
  translateFifth,
  translateSeventh,
  translateNinth,
  translateEleventh,
  translateThirteenth,
} from './translate-notes';

import {
  Chord,
  ChanceOfPlaying,
  ChanceKeys,
  FullChord,
  ReadableChord,
  QualityRatios,
} from './types/chord-types';

const percentToDecimal = (input: number) => input / 100;

// Chord logic
const minorThirdNoSharpedNinth = (chord: Chord): boolean =>
  chord.third === 3 && !!chord.ninth && chord.ninth.includes(15);

const fourthNoEleventh = (chord: Chord): boolean =>
  chord.third === 5 && chord.eleventh === 17;

const flatFifthNoSharpedEleventh = (chord: Chord): boolean =>
  chord.fifth === 6 && chord.eleventh === 18;

const augmentedFifthNoFlatThirteenth = (chord: Chord): boolean =>
  chord.fifth === 8 && chord.thirteenth === 20;

const sixthNoThirteenth = (chord: Chord): boolean =>
  chord.seventh === 9 && chord.thirteenth === 21;

const doLogic = (chord: Chord): Chord => {
  if (minorThirdNoSharpedNinth(chord)) chord.ninth = null;
  if (fourthNoEleventh(chord)) chord.eleventh = null;
  if (flatFifthNoSharpedEleventh(chord)) chord.eleventh = null;
  if (augmentedFifthNoFlatThirteenth(chord)) chord.thirteenth = null;
  if (sixthNoThirteenth(chord)) chord.thirteenth = null;
  return chord;
}

const calculateNotesToPlay = (chord: Chord, chance: ChanceOfPlaying): Chord => {
  try {
    const calculatedChord: Chord = {
      third: chord.third,
      fifth: null,
      seventh: null,
      ninth: null,
      eleventh: null,
      thirteenth: null,
    };

    Object.entries(chord).forEach(([key, value]) => {
      if (key === 'third') return;
      // @ts-ignore
      if (Math.random() <= percentToDecimal(chance[key])) {
        // @ts-ignore
        calculatedChord[key] = value;
      }
    })

    return calculatedChord;
  } catch (err) {
    console.log(err);
    return chord;
  }
};

const completelyRandom: ChanceOfPlaying  = {
  fifth: generateRandomNumber(100),
  seventh: generateRandomNumber(100),
  ninth: generateRandomNumber(100),
  eleventh: generateRandomNumber(100),
  thirteenth: generateRandomNumber(100),
};

export const generateRoot = () => generateRandomNumber(12);

export const chordCalculator = (qualityRatios: QualityRatios, chance = completelyRandom): Chord =>
  doLogic(calculateNotesToPlay(generateRandomChord(qualityRatios), chance));

export const calculateChordRelativeToRoot = (root: number, chord: Chord): FullChord => ({
  root,
  third: chord.third + root,
  fifth: chord.fifth ? chord.fifth + root : null,
  seventh: chord.seventh ? chord.seventh + root : null,
  ninth: chord.ninth ? chord.ninth.map(v => v + root) : null,
  eleventh: chord.eleventh ? chord.eleventh + root : null,
  thirteenth: chord.thirteenth ? chord.thirteenth + root : null,
});

export const getReadableChord = (chord: Chord): ReadableChord => ({
  third: translateThird(chord.third),
  fifth: translateFifth(chord.fifth),
  seventh: translateSeventh(chord.seventh),
  ninth: translateNinth(chord.ninth),
  eleventh: translateEleventh(chord.eleventh),
  thirteenth: translateThirteenth(chord.thirteenth),
});
