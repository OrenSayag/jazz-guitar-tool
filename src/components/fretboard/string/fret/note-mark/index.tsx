import { FC } from "react";
import { cn } from "../../../../../lib/utils";
import { FretMark } from "../../../../../types";
import TooltipWrapper from "@/components/common/tooltip-wrapper";

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
  const { note, degree } = mark;
  return (
    <>
      <TooltipWrapper
        open={true}
        trigger={
          <div className={cn(cns.NOTE_MARK, className)}>
            <div className={cns.NOTE_INFO_CONTAINER}>
              <span>{note}</span>
            </div>
          </div>
        }
        tip={<span>{degree?.interval}</span>}
      />
    </>
  );
};

export default NoteMark;
