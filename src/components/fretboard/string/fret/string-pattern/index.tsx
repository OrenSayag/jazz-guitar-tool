import { FC } from "react";
import { cn } from "../../../../../lib/utils";

interface Props {
  className?: string;
}

const StringPattern: FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          "h-2 bg-yellow-600 w-full border border-yellow-600",
          className,
        )}
      ></div>
    </>
  );
};

export default StringPattern;
