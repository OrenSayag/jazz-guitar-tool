import { FC } from "react";
import { cn } from "@/lib/utils";
import { ListItem } from "@/types/app";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  className?: string;
  selectedValue: string;
  onChange: (val: string) => void;
  options: ListItem[];
  placeholder?: string;
}

const SelectWrapper: FC<Props> = ({
  selectedValue,
  options,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <>
      <Select onValueChange={onChange} value={selectedValue}>
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectWrapper;
