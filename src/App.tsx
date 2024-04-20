import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className={"fixed bottom-2 left-2"}>
          <ModeToggle />
        </div>
        <Button variant={"default"}>Hello shadcn</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
