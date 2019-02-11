export interface Chord {
  third: number,
  fifth: number | null,
  seventh: number | null,
  ninth: Array<number> | null,
  eleventh: number | null,
  thirteenth: number | null,
};

export interface ChanceOfPlaying {
  fifth: number,
  seventh: number,
  ninth: number,
  eleventh: number,
  thirteenth: number,
};

export type ChanceKeys = 'third' | 'fifth' | 'seventh' | 'ninth' | 'eleventh' | 'thirteenth';

interface JustRoot {
  root: number,
};

export type FullChord = JustRoot & Chord;

export interface ReadableChord {
  third: string,
  fifth: string | null,
  seventh: string | null,
  ninth: string | null,
  eleventh: string | null,
  thirteenth: string | null,
};

export type TwoRatios = [number, number];
export type ThreeRatios = [number, number, number];
export type FourRatios = [number, number, number, number];

export interface QualityRatios {
  third: ThreeRatios,
  fifth: ThreeRatios,
  seventh: ThreeRatios,
  ninth: FourRatios,
  eleventh: TwoRatios,
  thirteenth: TwoRatios,
};
