import { FretRange } from "../src/types";

type Input = {
  fretRange: FretRange;
};

const useFretRange = ({ fretRange }: Input) => {
  const fretsToRender = fretRange[1] - fretRange[0];
  if (fretsToRender < 0) throw new Error("Invalid fret range");
  const fretsArr = Array.from({ length: fretsToRender }, (_, i) => ({
    fretNumber: i + fretRange[0],
  }));
  return {
    fretsArr,
  };
};

export default useFretRange;
