
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DepthExplorer } from "@/components/DepthExplorer";
import { AttractionsGrid } from "@/components/AttractionsGrid";
import { DailyEvents } from "@/components/DailyEvents";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
          <Navbar />
          <Hero />
          <DepthExplorer />
          <AttractionsGrid />
          <DailyEvents />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
