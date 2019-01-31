interface ChanceOfPlaying {
  third: number,
  fifth: number,
  seventh: number,
  ninth: number,
  eleventh: number,
  thirteenth: number,
};

interface ChordCalcOptions {
};

interface Chord {
  third: number | null,
  fifth: number | null,
  seventh: number | null,
  ninth: Array<number> | null,
  eleventh: number | null,
  thirteenth: number | null,
};

const percentToDecimal = (input: number) => input / 100;

const calculateNotesToPlay = (chord: Chord, chance: ChanceOfPlaying): Chord => {
  const calculatedChord = {};
  Object.keys(chord).forEach(key => {
    if (Math.random() > percentToDecimal(chance[key])) {
      calculatedChord[key] = null;
    } else {
      calculatedChord[key] = chord[key];
    }
  })
  return calculatedChord;
};

const chordCalculator = ({}: ChordCalcOptions): Chord => {
  return {
    third: null,
    fifth: null,
    seventh: null,
    ninth: null,
    eleventh: null,
    thirteenth: null,
  };
};

