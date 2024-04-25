import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Fretboard from "../components/fretboard";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className={"fixed bottom-2 left-2"}>
          <ModeToggle />
        </div>
        <div className={"w-fit mx-auto my-6"}>
          <Fretboard
            stringChart={{
              strings: [
                {
                  fretMark: {
                    fret: 8,
                    degree: {
                      stepsFromRoot: 0,
                      romanNumeral: "I",
                    },
                    note: "C",
                  },
                },
                {
                  fretMark: {
                    fret: 7,
                    degree: {
                      stepsFromRoot: 4,
                      romanNumeral: "iii",
                    },
                    note: "E",
                  },
                },
                {
                  fretMark: {
                    fret: 9,
                    degree: {
                      stepsFromRoot: 11,
                      romanNumeral: "vii",
                    },
                    note: "B",
                  },
                },
                {},
                {},
                {},
              ],
              fretRange: [0, 22],
            }}
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
