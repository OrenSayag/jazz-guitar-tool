import { FC } from "react";
import { cn } from "../../../../lib/utils";

interface Props {
  className?: string;
  doubleDot?: boolean;
}

const cns = {
  COMMON: `w-2 h-2 rounded-full bg-white`,
  CONTAINER: `flex flex-col justify-center border-2 border-red-500`,
};

const DotPattern: FC<Props> = ({ className, doubleDot }) => {
  return (
    <>
      <div className={cn(className)}>
        <div className={cns.COMMON} />
        {doubleDot && <div className={cn(cns.COMMON, "mt-12")} />}
      </div>
    </>
  );
};

export default DotPattern;
