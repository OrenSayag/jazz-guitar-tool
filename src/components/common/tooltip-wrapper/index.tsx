import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  trigger: React.ReactNode;
  tip: React.ReactNode;
  open?: boolean;
}

const TooltipWrapper: FC<Props> = ({ tip, trigger, open }) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger asChild>{trigger}</TooltipTrigger>
          <TooltipContent>{tip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TooltipWrapper;
