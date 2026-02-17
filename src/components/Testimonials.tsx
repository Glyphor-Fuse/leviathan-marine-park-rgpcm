
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "The Midnight Zone exhibit changed my life. I've never felt so small yet so connected to the planet. Truly a spiritual experience.",
    name: "Elena R.",
    title: "Marine Biologist",
  },
  {
    quote: "My kids were mesmerized. We spent three hours just at the shark tunnel. Best family weekend we've had in years.",
    name: "Marcus T.",
    title: "Visitor from Chicago",
  },
  {
    quote: "The silence and the lighting design are perfect. It's not just an aquarium; it's art. Highly recommend the night tour.",
    name: "Sarah Jenkins",
    title: "Travel Blogger",
  },
  {
    quote: "Clean, educational, and awe-inspiring. The conservation message really hit home for us.",
    name: "The Chen Family",
    title: "Annual Pass Holders",
  },
  {
    quote: "I proposed to my fiancée in front of the bioluminescent jelly tank. It was magical. Thank you Leviathan staff!",
    name: "David K.",
    title: "Visitor",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background-950 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Visitor Voices</h2>
        <p className="mt-4 text-foreground-400">Join thousands who have journeyed into the deep.</p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </section>
  );
}

export default Testimonials;
