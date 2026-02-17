
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/40 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="mb-4 inline-block rounded-full bg-background-500/10 px-4 py-4.5 text-sm font-medium tracking-widest text-foreground-400 backdrop-blur-md">
            EST. 2025
          </span>
          <h1 className="font-display mb-6 text-6xl font-black uppercase tracking-tight text-foreground md:text-8xl lg:text-9xl">
            Leviathan
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-foreground-200 md:text-2xl">
            Descend into the unknown. Experience the ocean's deepest mysteries in the world's most immersive marine park.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-background-500 text-lg font-bold text-foreground-950 hover:bg-background-400 sm:px-8">
              Book Your Dive
            </Button>
            <Button variant="outline" size="lg" className="border-border/20 bg-background/5 text-lg text-foreground hover:bg-background/10 backdrop-blur-sm sm:px-8">
              View Daily Schedule
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.div>
    </div>
  );
}

export default Hero;
