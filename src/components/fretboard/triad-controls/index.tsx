import { FC } from "react";
import { cn } from "@/lib/utils";
import { ChordType, Note, notes } from "@/types";
import { Label } from "@/components/ui/label";
import SelectWrapper from "@/components/common/select-wrapper";

interface Props {
  className?: string;
  chordType: ChordType;
  setChordType: (val: ChordType) => void;
  rootNote: Note;
  setRootNote: (note: Note) => void;
}

const TriadsControls: FC<Props> = ({
  className,
  setChordType,
  chordType,
  setRootNote,
  rootNote,
}) => {
  return (
    <>
      <div className={cn(className)}>
        <div>
          <Label>Chord Type</Label>
          <SelectWrapper
            selectedValue={chordType}
            onChange={(val: string) => setChordType(val as ChordType)}
            options={Object.keys(ChordType).map((ct) => ({
              label: ct,
              value: ChordType[ct as keyof typeof ChordType],
            }))}
            placeholder={"Chord Type"}
          />
        </div>
        <div>
          <Label>Root Note</Label>
          <SelectWrapper
            selectedValue={rootNote}
            onChange={(val: string) => setRootNote(val as Note)}
            options={notes.map((n) => ({
              label: n,
              value: n,
            }))}
            placeholder={"Root Note"}
          />
        </div>
      </div>
    </>
  );
};

export default TriadsControls;
