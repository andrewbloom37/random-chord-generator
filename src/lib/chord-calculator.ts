const percentToDecimal = (input: number) => input / 100;

const generateRandomNumber = (n: number) => Math.floor(Math.random() * n);

const generateThird = () =>
  3 + generateRandomNumber(3);

const generateFifth = () =>
  6 + generateRandomNumber(3);

const generateSeventh = () =>
  9 + generateRandomNumber(3);

const generateNinth = () => {
  const randomOneOfFour = generateRandomNumber(4);
  if (randomOneOfFour === 3) return [13, 15];
  return [13 + randomOneOfFour];
};

const generateEleventh = () =>
  17 + generateRandomNumber(2);

const generateThirteenth = () =>
  20 + generateRandomNumber(2);

interface Chord {
  third: number | null,
  fifth: number | null,
  seventh: number | null,
  ninth: Array<number> | null,
  eleventh: number | null,
  thirteenth: number | null,
};

const generateRandomChord = () => {
  const chord: Chord = {
    third: generateThird(),
    fifth: generateFifth(),
    seventh: generateSeventh(),
    ninth: generateNinth(),
    eleventh: generateEleventh(),
    thirteenth: generateThirteenth(),
  };
  if (chord.third === 5) chord.eleventh = null;
  if (chord.fifth === 8) chord.thirteenth = null;
  if (chord.seventh === 9) chord.thirteenth = null;
  return chord;
};

interface ChanceOfPlaying {
  third: number,
  fifth: number,
  seventh: number,
  ninth: number,
  eleventh: number,
  thirteenth: number,
};

const calculateNotesToPlay = (chord: Chord, chance: ChanceOfPlaying): Chord => {
  const calculatedChord = {};
  Object.keys(chord).forEach(key => {
    // @ts-ignore: no index errors below
    if (Math.random() > percentToDecimal(chance[key])) {
      // @ts-ignore
      calculatedChord[key] = null;
    } else {
      // @ts-ignore
      calculatedChord[key] = chord[key];
    }
  })
  // @ts-ignore: runtime created object
  return calculatedChord;
};

const completelyRandom: ChanceOfPlaying  = {
  third: generateRandomNumber(100),
  fifth: generateRandomNumber(100),
  seventh: generateRandomNumber(100),
  ninth: generateRandomNumber(100),
  eleventh: generateRandomNumber(100),
  thirteenth: generateRandomNumber(100),
};

export const generateRoot = () => generateRandomNumber(12);
export const chordCalculator = (chance = completelyRandom): Chord =>
  calculateNotesToPlay(generateRandomChord(), chance);

interface JustRoot {
  root: number,
};

export type FullChord = JustRoot & Chord;

export const calculateChordRelativeToRoot = (root: number, chord: Chord): FullChord => ({
  root,
  third: chord.third ? chord.third + root : null,
  fifth: chord.fifth ? chord.fifth + root : null,
  seventh: chord.seventh ? chord.seventh + root : null,
  ninth: chord.ninth ? chord.ninth.map(v => v + root) : null,
  eleventh: chord.eleventh ? chord.eleventh + root : null,
  thirteenth: chord.thirteenth ? chord.thirteenth + root : null,
});

const note = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'];
export const getNote = (root: number) => note[root]; 

const translateThird = (note: number | null) => {
  if (!note) return null;
  if (note === 3) return '-';
  if (note === 4) return 'M';
  return '4';
};

const translateFifth = (note: number | null) => {
  if (!note) return null;
  if (note === 6) return 'b5';
  if (note === 7) return '5';
  return '+5';
};

const translateSeventh = (note: number | null) => {
  if (!note) return null;
  if (note === 9) return '6';
  if (note === 10) return 'Dom7';
  return 'M7';
};

const translateNinth = (note: Array<number> | null) => {
  if (!note) return null;
  if (note.length === 2) return 'b9 & #9';
  const ninth = note[0];
  if (ninth === 13) return 'b9';
  if (ninth === 14) return '9';
  return '#9'
};

const translateEleventh = (note: number | null) => {
  if (!note) return null;
  if (note === 17) return '11';
  return '#11';
};

const translateThirteenth = (note: number | null) => {
  if (!note) return null;
  if (note === 20) return 'b13';
  return '13';
};

export interface ReadableChord {
  third: string | null,
  fifth: string | null,
  seventh: string | null,
  ninth: string | null,
  eleventh: string | null,
  thirteenth: string | null,
};

export const getReadableChord = (chord: Chord): ReadableChord => ({
  third: translateThird(chord.third),
  fifth: translateFifth(chord.fifth),
  seventh: translateSeventh(chord.seventh),
  ninth: translateNinth(chord.ninth),
  eleventh: translateEleventh(chord.eleventh),
  thirteenth: translateThirteenth(chord.thirteenth),
});