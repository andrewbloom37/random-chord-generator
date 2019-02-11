const note = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'];
export const getNote = (root: number) => note[root];

export const translateThird = (note: number) => {
  if (note === 3) return '-';
  if (note === 4) return 'M';
  return '4';
};

export const translateFifth = (note: number | null) => {
  if (!note) return null;
  if (note === 6) return 'b5';
  if (note === 7) return '5';
  return '+5';
};

export const translateSeventh = (note: number | null) => {
  if (!note) return null;
  if (note === 9) return '6';
  if (note === 10) return '-7';
  return 'Maj7';
};

export const translateNinth = (note: Array<number> | null) => {
  if (!note) return null;
  if (note.length === 2) return 'b9 & #9';
  const ninth = note[0];
  if (ninth === 13) return 'b9';
  if (ninth === 14) return '9';
  return '#9'
};

export const translateEleventh = (note: number | null) => {
  if (!note) return null;
  if (note === 17) return '11';
  return '#11';
};

export const translateThirteenth = (note: number | null) => {
  if (!note) return null;
  if (note === 20) return 'b13';
  return '13';
};
