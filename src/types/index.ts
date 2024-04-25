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

const intervals = [
  "Unison",
  "Minor 2nd",
  "Major 2nd",
  "Minor 3rd",
  "Major 3rd",
  "Perfect 4th",
  "Augmented 4th / Diminished 5th",
  "Perfect 5th",
  "Minor 6th",
  "Major 6th",
  "Minor 7th",
  "Major 7th",
  "Octave",
] as const;

export type Interval = (typeof intervals)[number];

export type RomanNumeral = (typeof romanNumerals)[number];

export type DegreeModification = "#" | "b" | "##" | "bb";

export type Degree = {
  stepsFromRoot: number;
  interval: Interval;
};

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

export type DegreeConfig = {
  degree: Degree;
};

export type FretRange = [number, number];

export enum ChordType {
  MAJOR = "Major",
  MINOR = "Minor",
  DOM_SEVEN = "Dominant Seven",
  FIVE = "Five",
  DIMINISHED = "Diminished",
  // DIMINISHED_SEVENTH = "Diminished Seventh",
  // AUGMENTED = "Augemented",
  // SUS2 = "Sus2",
  // SUS4 = "Sus4",
  // MAJ7 = "Major 7",
  // MINOR7 = "Minor 7",
  // SEVEN_SUS_4 = "Seven sus 4",
}

type DegreeMap = Degree[];

export const chordDegreeMap: Record<ChordType, DegreeMap> = {
  [ChordType.MAJOR]: [
    { stepsFromRoot: 0, interval: "Unison" },
    { stepsFromRoot: 4, interval: "Major 3rd" },
    { stepsFromRoot: 7, interval: "Perfect 5th" },
  ],
  [ChordType.MINOR]: [
    { stepsFromRoot: 0, interval: "Unison" },
    { stepsFromRoot: 3, interval: "Minor 3rd" },
    { stepsFromRoot: 7, interval: "Perfect 5th" },
  ],
  [ChordType.DOM_SEVEN]: [
    { stepsFromRoot: 0, interval: "Unison" },
    { stepsFromRoot: 4, interval: "Major 3rd" },
    { stepsFromRoot: 6, interval: "Perfect 5th" },
    { stepsFromRoot: 11, interval: "Minor 7th" },
  ],
  [ChordType.DIMINISHED]: [
    { stepsFromRoot: 0, interval: "Unison" },
    { stepsFromRoot: 3, interval: "Minor 3rd" },
    { stepsFromRoot: 6, interval: "Augmented 4th / Diminished 5th" },
  ],
  [ChordType.FIVE]: [
    { stepsFromRoot: 0, interval: "Unison" },
    { stepsFromRoot: 7, interval: "Perfect 5th" },
  ],
};
