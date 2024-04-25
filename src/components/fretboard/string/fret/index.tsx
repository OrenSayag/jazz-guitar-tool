import { FC } from "react";
import { cn } from "../../../../lib/utils";
import { FretMark } from "../../../../types";
import StringPattern from "./string-pattern";
import FretPattern from "./fret-pattern";
import NoteMark from "./note-mark";

interface Props {
  className?: string;
  mark?: FretMark;
  fretNumber: number;
}

export const fretWidthCn = `w-14`;

const cns = {
  FIRST_FRET: "bg-transparent",
  FRET_COMMON: cn(
    "h-8 flex flex-col justify-center relative bg-mahogany-500",
    fretWidthCn,
  ),
};

const Fret: FC<Props> = ({ className, mark, fretNumber }) => {
  const isFirstFret = fretNumber === 0;
  return (
    <>
      <div
        className={cn(
          cns.FRET_COMMON,
          isFirstFret && cns.FIRST_FRET,
          className,
        )}
      >
        <StringPattern className={"z-40"} />
        {mark && <NoteMark mark={mark} />}
        {!isFirstFret && <FretPattern className={"absolute right-0 z-30"} />}
      </div>
    </>
  );
};

export default Fret;
