import { FC } from "react";
import { cn } from "../../../../../src/lib/utils";
import { FretMark } from "../../../../../src/types";

interface Props {
  className?: string;
  mark: FretMark;
}

const cns = {
  NOTE_MARK:
    "rounded-full bg-sky-800 flex items-center justify-center aspect-square w-6 absolute left-1/4 z-50 select-none",
  NOTE_INFO_CONTAINER: "flex gap-1 text-xs",
};

const NoteMark: FC<Props> = ({ className, mark }) => {
  const { note, degree, modification } = mark;
  return (
    <>
      <div className={cn(cns.NOTE_MARK, className)}>
        <div className={cns.NOTE_INFO_CONTAINER}>
          <span>{note}</span>
          <span>{degree?.romanNumeral}</span>
        </div>
      </div>
    </>
  );
};

export default NoteMark;
