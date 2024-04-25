import { FC } from "react";
import { cn } from "../../lib/utils";
import { StringChart } from "../../types";
import String from "./string";
import FretNumeration from "./fret-numeration";
import DotContainer from "./dot-container";

interface Props {
  className?: string;
  stringChart: StringChart;
}

const cns = {
  FRETBOARD: "w-fit",
  STRING_CONTAINER: "relative flex flex-col-reverse",
};

const Fretboard: FC<Props> = ({ className, stringChart }) => {
  return (
    <>
      <div className={cn(cns.FRETBOARD, className)}>
        <FretNumeration fretRange={stringChart.fretRange} />
        <div className={cn(cns.STRING_CONTAINER)}>
          <DotContainer fretRange={stringChart.fretRange} />
          {stringChart.strings.map((s, i) => (
            <String
              key={`string-${i}`}
              stringConfig={s}
              fretRange={stringChart.fretRange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Fretboard;
