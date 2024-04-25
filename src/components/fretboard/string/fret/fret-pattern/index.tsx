import { FC } from "react";
import { cn } from "../../../../../lib/utils";

interface Props {
  className?: string;
}

const cns = {
  COMMON: `h-full w-1 bg-yellow-800`,
};

const FretPattern: FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn(cns.COMMON, className)}></div>
    </>
  );
};

export default FretPattern;
