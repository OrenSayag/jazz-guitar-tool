import { Degree, Note, notes, StringConfig } from "@/types";

type Input = {
  rootNote: Note;
  degree: Degree;
  stringTuning: Note;
  maxFret: number;
  globalRootFret?: number;
  secondIteration?: boolean;
};

type Output = (StringConfig & { rootFret?: number }) | "target fret too far";

const maxDistanceFromGlobalRoot = 3;

const getStringFretMark = ({
  stringTuning,
  rootNote,
  degree,
  maxFret,
  globalRootFret,
  secondIteration,
}: Input): Output => {
  const rootFret = getRootFret(rootNote, stringTuning, maxFret);
  const targetFret = getTargetFret(rootFret, degree, maxFret, globalRootFret);
  if (
    Math.abs(targetFret - (globalRootFret ?? rootFret)) >
      maxDistanceFromGlobalRoot &&
    !secondIteration
  ) {
    return "target fret too far";
  }
  const targetNote = getTargetNote(rootNote, degree);
  return {
    fretMark: {
      degree,
      fret: targetFret,
      note: targetNote,
    },
    rootFret: degree.interval === "Unison" ? rootFret : undefined,
  };
};

export default getStringFretMark;

function getRootFret(rootNote: Note, stringTuning: Note, maxFret: number) {
  const stringTuningIndex = notes.indexOf(stringTuning);
  const rootNoteIndex = notes.indexOf(rootNote);
  let distance = rootNoteIndex - stringTuningIndex;
  if (distance < 0) {
    distance += 12;
  }
  const nextOctaveFret = distance + 12;
  if (nextOctaveFret <= maxFret) {
    distance = [nextOctaveFret, distance][Math.random() < 0.5 ? 0 : 1];
  }
  return distance;
}

function getTargetFret(
  rootFret: number,
  degree: Degree,
  maxFret: number,
  globalRootFret?: number,
) {
  let targetFret = rootFret + degree.stepsFromRoot;
  const prevOctaveFret = 12 - targetFret > 0 ? targetFret : targetFret - 12;

  const nextOctaveFret =
    prevOctaveFret + 12 <= maxFret ? prevOctaveFret + 12 : undefined;
  if (nextOctaveFret === undefined) {
    return prevOctaveFret;
  }
  const prevOctaveDistanceFromRoot = Math.abs(
    prevOctaveFret - (globalRootFret ?? rootFret),
  );
  const nextOctaveDistanceFromRoot = Math.abs(
    nextOctaveFret - (globalRootFret ?? rootFret),
  );
  targetFret =
    prevOctaveDistanceFromRoot < nextOctaveDistanceFromRoot
      ? prevOctaveFret
      : nextOctaveFret;
  return targetFret;
}

function getTargetNote(rootNote: Note, degree: Degree) {
  const rootNoteIndex = notes.indexOf(rootNote);
  let targetNoteIndex = rootNoteIndex + degree.stepsFromRoot;
  if (targetNoteIndex >= notes.length) {
    targetNoteIndex -= notes.length;
  }
  return notes[targetNoteIndex];
}
