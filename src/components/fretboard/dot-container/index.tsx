import { FC } from "react";
import { cn } from "../../../lib/utils";
import { FretRange } from "../../../types";
import useFretRange from "../../../hooks/use-fret-range";
import { fretWidthCn } from "../string/fret";
import DotPattern from "./dot-pattern";

interface Props {
  className?: string;
  fretRange: FretRange;
}

const cns = {
  CONTAINER: "absolute h-full w-full z-50 flex",
  ITEM_CONTAINER: cn("flex items-center justify-center", fretWidthCn),
};

const DotContainer: FC<Props> = ({ className, fretRange }) => {
  const { fretsArr } = useFretRange({ fretRange });
  return (
    <>
      <div className={cn(cns.CONTAINER, className)}>
        {fretsArr.map((f) => (
          <Item number={f.fretNumber} key={`fretdotghost-${f.fretNumber}`} />
        ))}
      </div>
    </>
  );
};

export default DotContainer;

function Item({ number }: { number: number }) {
  const renderType = shouldRenderDot(number);
  return (
    <div className={cns.ITEM_CONTAINER}>
      {renderType !== "none" && (
        <DotPattern doubleDot={renderType === "double-dot"} />
      )}
    </div>
  );
}

function shouldRenderDot(number: number): "dot" | "double-dot" | "none" {
  const numbersForDot = [3, 5, 7, 9, 15, 17, 19, 21];
  const numbersForDoubleDot = [12, 24];
  if (numbersForDot.includes(number)) {
    return "dot";
  }
  if (numbersForDoubleDot.includes(number)) {
    return "double-dot";
  }
  return "none";
}
