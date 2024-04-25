import { Note } from "@/types/index";

export enum Tuning {
  STANDARD = "Standard",
  TWO_STEPS_DOWN = "Two Steps Down",
  DROP_D = "Drop D",
  BASS_STANDARD = "Bass Standard",
}

export const tuningStrings: Record<Tuning, Note[]> = {
  [Tuning.STANDARD]: ["E", "A", "D", "G", "B", "E"],
  [Tuning.TWO_STEPS_DOWN]: ["D", "G", "C", "F", "A", "D"],
  [Tuning.DROP_D]: ["D", "A", "D", "G", "B", "E"],
  [Tuning.BASS_STANDARD]: ["E", "A", "D", "G"],
};
