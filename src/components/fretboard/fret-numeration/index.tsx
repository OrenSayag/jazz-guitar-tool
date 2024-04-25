import { FC } from "react";
import { cn } from "../../../lib/utils";
import { FretRange } from "../../../types";
import useFretRange from "../../../hooks/use-fret-range";
import { fretWidthCn } from "../string/fret";

interface Props {
  className?: string;
  fretRange: FretRange;
}

const cns = {
  FRET_COMMON: cn("text-center select-none", fretWidthCn),
  CONTAINER: "flex",
};

const FretNumeration: FC<Props> = ({ className, fretRange }) => {
  const { fretsArr } = useFretRange({ fretRange });
  return (
    <>
      <div className={cn(cns.CONTAINER, className)}>
        {fretsArr.map((f) => (
          <Item number={f.fretNumber} key={`fretroot-${f.fretNumber}`} />
        ))}
      </div>
    </>
  );
};

export default FretNumeration;

function Item({ number }: { number: number }) {
  return <div className={cns.FRET_COMMON}>{number}</div>;
}
