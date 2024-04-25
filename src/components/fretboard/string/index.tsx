import { FC } from "react";
import { cn } from "../../../lib/utils";
import { FretRange, StringConfig } from "../../../types";
import Fret from "./fret";
import useFretRange from "../../../hooks/use-fret-range";

interface Props {
  className?: string;
  stringConfig: StringConfig;
  fretRange: FretRange;
}

const String: FC<Props> = ({
  className,
  stringConfig: { fretMark },
  fretRange,
}) => {
  const { fretsArr } = useFretRange({ fretRange });
  return (
    <>
      <div className={cn("flex ", className)}>
        {fretsArr.map((fret) => (
          <Fret
            key={fret.fretNumber}
            mark={fretMark?.fret === fret.fretNumber ? fretMark : undefined}
            fretNumber={fret.fretNumber}
          />
        ))}
      </div>
    </>
  );
};

export default String;
