import { useState } from "react";
import { ChordType, Note, StringChart } from "@/types";
import generateTriadMap from "@/services/fretboard-arranger/methods/generate-triad-map";

const useFretboardArrangement = () => {
  const [rootNote, setRootNote] = useState<Note>("C");
  const [chordType, setChordType] = useState<ChordType>(ChordType.MINOR);
  const [stringChart, setStringChart] = useState<StringChart>(
    generateTriadMap({
      chordType,
      rootNote,
    }),
  );
  const onRefresh = () => {
    setStringChart(generateTriadMap({ chordType, rootNote }));
  };
  return {
    rootNote,
    setRootNote,
    chordType,
    setChordType,
    stringChart,
    onRefresh,
  };
};

export default useFretboardArrangement;
