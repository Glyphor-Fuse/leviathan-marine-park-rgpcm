
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Anchor, Fish, Star, Waves } from 'lucide-react';
import { cn } from "@/lib/utils";

const zones = [
  {
    id: "surface",
    depth: "0m",
    title: "The Shallows",
    description: "Sun-drenched lagoons teeming with ray and reef life.",
    color: "from-background-400 to-background-500",
    icon: <Waves className="w-8 h-8" />,
    features: ["Stingray Touch Pool", "Coral Gardens", "Turtle Rescue"]
  },
  {
    id: "twilight",
    depth: "200m",
    title: "Twilight Zone",
    description: "Where light fades and the ocean's predators hunt.",
    color: "from-background-600 to-background-800",
    icon: <Fish className="w-8 h-8" />,
    features: ["Hammerhead Shark Tank", "Barracuda Run", "Octopus Hideout"]
  },
  {
    id: "midnight",
    depth: "1000m",
    title: "Midnight Zone",
    description: "Complete darkness illuminated only by bioluminescence.",
    color: "from-background-950 to-background-950",
    icon: <Star className="w-8 h-8" />,
    features: ["Jellyfish Bloom", "Anglerfish Cavern", "Glowing Plankton"]
  },
  {
    id: "abyss",
    depth: "4000m",
    title: "The Abyss",
    description: "The crushing depths where ancient giants roam.",
    color: "from-background-950 to-background",
    icon: <Anchor className="w-8 h-8" />,
    features: ["Giant Squid Exhibit", "Thermal Vents", "Deep Sea Rover"]
  }
];

export function DepthExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const depthValue = useTransform(scrollYProgress, [0, 1], [0, 4000]);
  const smoothDepth = useSpring(depthValue, { stiffness: 100, damping: 30 });
  const [currentDepth, setCurrentDepth] = useState(0);

  useEffect(() => {
    return smoothDepth.on("change", (v) => setCurrentDepth(Math.round(v)));
  }, [smoothDepth]);

  return (
    <section ref={containerRef} className="relative bg-background text-foreground">
      {/* Sticky Depth Gauge */}
      <div className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-border/10 bg-background/80 px-6 py-4 backdrop-blur-md md:h-screen md:w-64 md:flex-col md:justify-center md:border-b-0 md:border-r">
        <div className="mb-4 text-center">
          <h3 className="font-display text-2xl font-bold tracking-widest text-foreground-400">DEPTH</h3>
          <div className="font-mono text-5xl font-light tabular-nums">
            {currentDepth}
            <span className="text-xl text-foreground/50">m</span>
          </div>
        </div>
        
        <div className="hidden h-64 w-1 rounded-full bg-background/10 md:block relative">
          <motion.div 
            className="absolute top-0 w-full rounded-full bg-background-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>

        <div className="mt-8 hidden space-y-4 text-sm text-foreground/40 md:block">
           <p>Scroll to dive deeper</p>
        </div>
      </div>

      {/* Zones Container */}
      <div className="md:ml-64">
        {zones.map((zone, i) => (
          <div 
            key={zone.id} 
            className={cn(
              "sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-20",
              "bg-gradient-to-b border-t border-border/5",
              zone.color
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex items-center gap-4 text-foreground-300">
                <div className="rounded-full bg-background/10 p-3 backdrop-blur-sm">
                  {zone.icon}
                </div>
                <span className="font-mono text-lg uppercase tracking-widest">{zone.depth} LEVEL</span>
              </div>
              
              <h2 className="font-display mb-6 text-6xl font-bold text-foreground drop-shadow-xl md:text-8xl">
                {zone.title}
              </h2>
              
              <p className="mb-12 max-w-xl text-xl font-light leading-relaxed text-foreground/90">
                {zone.description}
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                {zone.features.map((feature) => (
                  <div key={feature} className="group relative overflow-hidden rounded-xl bg-background/20 p-6 backdrop-blur-sm transition-colors hover:bg-background-900/40">
                    <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-foreground-200">
                      {feature}
                    </h4>
                    <div className="mt-2 h-1 w-12 rounded-full bg-background-500/50 transition-all group-hover:w-full group-hover:bg-background-400" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DepthExplorer;
