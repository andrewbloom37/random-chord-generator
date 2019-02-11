import {
  Chord,
  TwoRatios,
  ThreeRatios,
  FourRatios,
  QualityRatios,
} from './types/chord-types';

export const generateRandomNumber = (n: number) => Math.floor(Math.random() * n);

const noPlay = (ratio: TwoRatios | ThreeRatios | FourRatios) => ratio.every(v => v === 0);

const generateTwo = (ratio: TwoRatios) => {
  if (noPlay(ratio)) return generateRandomNumber(2);
  const [first, second] = ratio;
  const sum = first + second;
  const firstPartition = first / sum;
  const randomNumber = Math.random();
  if (randomNumber > firstPartition) return 1;
  return 0;
};

const generateThree = (ratio: ThreeRatios) => {
  if (noPlay(ratio)) return generateRandomNumber(3);
  const [first, second, third] = ratio;
  const sum = first + second + third;
  const firstPartition = first / sum;
  const secondPartition = firstPartition + (second / sum);
  const randomNumber = Math.random();
  if (randomNumber > secondPartition) return 2;
  if (randomNumber > firstPartition) return 1;
  return 0;
};

const generateFour = (ratio: FourRatios) => {
  if (noPlay(ratio)) return generateRandomNumber(4);
  const [first, second, third, fourth] = ratio;
  const sum = first + second + third + fourth;
  const firstPartition = first / sum;
  const secondPartition = firstPartition + (second / sum);
  const thirdPartition = secondPartition + (third / sum);
  const randomNumber = Math.random();
  if (randomNumber > thirdPartition) return 3;
  if (randomNumber > secondPartition) return 2;
  if (randomNumber > firstPartition) return 1;
  return 0;
};

const generateThird = (ratio: ThreeRatios) => {
   return 3 + generateThree(ratio)
};


const generateFifth = (ratio: ThreeRatios) => {
  return 6 + generateThree(ratio);
};

const generateSeventh = (ratio: ThreeRatios) => {
  return 9 + generateThree(ratio);
};

const generateNinth = (ratio: FourRatios) => {
  const randomOneOfFour = generateFour(ratio);
  if (randomOneOfFour === 3) return [13, 15];
  return [13 + randomOneOfFour];
};

const generateEleventh = (ratio: TwoRatios) => {
  return 17 + generateTwo(ratio);
};

const generateThirteenth = (ratio: TwoRatios) => {
  return 20 + generateTwo(ratio);
};

export const generateRandomChord = ({
  third, fifth, seventh, ninth, eleventh, thirteenth,
}: QualityRatios) => {
  const chord: Chord = {
    third: generateThird(third),
    fifth: generateFifth(fifth),
    seventh: generateSeventh(seventh),
    ninth: generateNinth(ninth),
    eleventh: generateEleventh(eleventh),
    thirteenth: generateThirteenth(thirteenth),
  };
  return chord;
};
