import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeModeToggle from "./components/ThemeModeToggle";
import { Bar, BarChart, CartesianGrid } from "recharts";
import { ChartContainer } from "./components/chart";
import { type ChartConfig } from "./components/chart";

function App() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "",
    },
    mobile: {
      label: "Mobile",
      color: "",
    },
  } satisfies ChartConfig;

  return (
    <>
      <ThemeProvider>
        <main className="h-svh text-center bg-background p-20">
          <h1 className="text-foreground/50 text-4xl font-bold mb-4">
            Theming whit {" "}
            <span className="text-primary font-semibold">React</span> and{" "}
            <span className=" text-foreground font-semibold">Shadcn</span>
          </h1>
          <div className="bg-foreground/10 p-4 rounded-lg inline-block mb-8">
            <p className="text-foreground/80">
              Press{" "}
              <code className="bg-foreground/30 px-2 py-1 rounded">F12</code> to
              open DevTools
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center mb-12">
            <a
              href="https://ui.shadcn.com/docs/theming"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 text-primary-foreground 
            bg-primary hover:bg-secondary rounded-full transition-colors"
            >
              Documentation
            </a>
            <ThemeModeToggle />
          </div>
          <div className="w-full max-w-[600px] mx-auto">
            <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="mobile" fill="var(--chart-1)" radius={4} />
          </BarChart>
        </ChartContainer>
          </div>
          
        </main>
        
      </ThemeProvider>
    </>
  );
}

export default App;
