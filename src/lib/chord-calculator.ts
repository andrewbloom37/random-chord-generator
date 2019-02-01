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
}

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

export const generateRoot = generateRandomNumber(12);
export const chordCalculator = (chance = completelyRandom): Chord =>
  calculateNotesToPlay(generateRandomChord(), chance);


