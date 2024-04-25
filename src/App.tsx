import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Fretboard from "./components/fretboard";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import useFretboardArrangement from "@/hooks/use-fretboard-arrangement";
import TriadsControls from "@/components/fretboard/triad-controls";

function App() {
  const {
    onRefresh,
    chordType,
    stringChart,
    rootNote,
    setRootNote,
    setChordType,
  } = useFretboardArrangement();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className={"fixed bottom-2 left-2"}>
          <ModeToggle />
        </div>
        <h2>
          {rootNote} {chordType}
        </h2>
        <TriadsControls
          chordType={chordType}
          setChordType={setChordType}
          rootNote={rootNote}
          setRootNote={setRootNote}
        />
        <div className={"w-fit mx-auto my-6"}>
          <Button onClick={onRefresh}>
            <RefreshCw />
          </Button>
          <Fretboard
            stringChart={stringChart}
            // stringChart={{
            //   strings: [
            //     {
            //       fretMark: {
            //         fret: 8,
            //         degree: {
            //           stepsFromRoot: 0,
            //           interval: "Unison",
            //         },
            //         note: "C",
            //       },
            //     },
            //     {
            //       fretMark: {
            //         fret: 7,
            //         degree: {
            //           stepsFromRoot: 4,
            //           interval: "Major 3rd",
            //         },
            //         note: "E",
            //       },
            //     },
            //     {
            //       fretMark: {
            //         fret: 9,
            //         degree: {
            //           stepsFromRoot: 11,
            //           interval: "Major 7th",
            //         },
            //         note: "B",
            //       },
            //     },
            //     {},
            //     {},
            //     {},
            //   ],
            //   fretRange: [0, 22],
            // }}
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
