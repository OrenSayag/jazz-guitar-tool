import {
  chordDegreeMap,
  ChordType,
  Degree,
  FretRange,
  Note,
  StringChart,
  StringConfig,
} from "@/types";
import { Tuning, tuningStrings } from "@/types/strings";
import getStringFretMark from "@/services/fretboard-arranger/methods/get-string-fret-mark";

const FRETRANGE: FretRange = [0, 21];

type Input = {
  rootNote: Note;
  chordType: ChordType;
  startString?: number;
  tuning?: Tuning;
};

type Output = StringChart;

const generateTriadMap = ({
  chordType,
  rootNote,
  startString,
  tuning = Tuning.STANDARD,
}: Input): Output => {
  const intervalMap = chordDegreeMap[chordType];
  const stringCount = tuningStrings[tuning].length;
  const amountOfNotes = intervalMap.length;
  const maxEmptyStrings = stringCount - amountOfNotes + 1;
  if (startString && startString > maxEmptyStrings) {
    throw new Error(
      `Invalid start string. Start string: ${startString}. Max empty strings: ${maxEmptyStrings}`,
    );
  }
  if (!startString) {
    startString = getRandomStartString(maxEmptyStrings);
  }

  const stringsToMark = tuningStrings[tuning].slice(
    startString - 1,
    startString - 1 + amountOfNotes,
  );
  const startPad = Array.from({ length: startString - 1 }, () => ({}));
  const endPad = Array.from(
    { length: stringCount - stringsToMark.length - startPad.length },
    () => ({}),
  );
  const midPad = stringsToMark.map(() => ({}));
  const strings: StringConfig[] = [...startPad, ...midPad, ...endPad];

  const maxFret = FRETRANGE[1];
  const firstStringConfig = getStringFretMark({
    rootNote,
    stringTuning: tuningStrings[tuning][startString - 1],
    degree: intervalMap[0],
    maxFret,
  });
  const { rootFret, fretMark } = firstStringConfig as StringConfig & {
    rootFret?: number;
  };
  if (Number.isNaN(Number(rootFret))) {
    throw new Error(`Invalid root fret: ${rootFret}`);
  }
  if (!fretMark) {
    throw new Error(`Invalid fretMark: ${fretMark}`);
  }
  strings[startString - 1] = { fretMark };
  // iterate over the strings, to mark comfortable frets
  const currDegreeIndex = { curr: 1 };
  const isNoDegreesLeft = () => currDegreeIndex.curr === intervalMap.length;

  getStringMarks({
    startString,
    stringCount,
    strings,
    maxFret,
    rootFret,
    rootNote,
    isNoDegreesLeft,
    tuning,
    intervalMap,
    currDegreeIndex,
  });

  return {
    fretRange: FRETRANGE,
    strings,
  };
};

export default generateTriadMap;

function getRandomStartString(stringCount: number) {
  return Math.floor(Math.random() * stringCount + 1);
}

function getStringMarks({
  startString,
  stringCount,
  strings,
  maxFret,
  rootFret,
  rootNote,
  currDegreeIndex,
  intervalMap,
  isNoDegreesLeft,
  tuning,
  secondIteration,
}: {
  startString: number;
  stringCount: number;
  maxFret: number;
  rootNote: Note;
  rootFret?: number;
  currDegreeIndex: { curr: number };
  intervalMap: Degree[];
  strings: StringConfig[];
  isNoDegreesLeft: () => boolean;
  tuning: Tuning;
  secondIteration?: boolean;
}) {
  for (let i = startString + 1; i < startString + stringCount; i++) {
    if (isNoDegreesLeft()) {
      break;
    }
    const stringIndex = i - 1 < stringCount ? i - 1 : i - 1 - stringCount;
    const stringConfig = getStringFretMark({
      rootNote,
      stringTuning: tuningStrings[tuning][stringIndex],
      degree: intervalMap[currDegreeIndex.curr],
      maxFret,
      globalRootFret: rootFret,
      secondIteration,
    });
    if (stringConfig === "target fret too far") {
      continue;
    }
    strings[stringIndex] = stringConfig;
    currDegreeIndex.curr++;
  }
}
