
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/10" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2 text-foreground">
          <Anchor className="h-8 w-8 text-foreground-400" />
          <span className="font-display text-2xl font-bold uppercase tracking-widest">Leviathan</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {["Experience", "Animals", "Events", "Conservation"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground-300 transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <Button className="bg-background-500 font-bold text-foreground hover:bg-background-400">
            Get Tickets
          </Button>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
             {["Experience", "Animals", "Events", "Conservation"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-foreground-300 hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-background-500 font-bold text-foreground hover:bg-background-400">
              Get Tickets
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
