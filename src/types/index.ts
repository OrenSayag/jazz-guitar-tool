export const notes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
] as const;

const romanNumerals = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "i",
  "ii",
  "iii",
  "iv",
  "v",
  "vi",
  "vii",
] as const;

export type RomanNumeral = (typeof romanNumerals)[number];

export type Degree = {
  stepsFromRoot: number;
  romanNumeral: RomanNumeral;
};

export type DegreeModification = "#" | "b" | "##" | "bb";

export type Note = (typeof notes)[number];

export type FretMark = {
  note: Note;
} & DegreeConfig;

export type StringConfig = {
  fretMark?: FretMark & { fret: number };
};

export type StringChart = {
  strings: StringConfig[];
  fretRange: FretRange;
};

export type StringChartItem = StringChart["strings"][number];

export type DegreeConfig = {
  degree: Degree;
  modification?: DegreeModification;
};

export const maxFrets = 24;

export type FretRange = [number, number];
