
import { WobbleCard } from "@/components/ui/wobble-card";

export function AttractionsGrid() {
  return (
    <section className="bg-background-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Explore Our Worlds</h2>
          <p className="mt-4 text-lg text-foreground-400">Three distinct ecosystems. One unforgettable journey.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-background-900 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base font-semibold tracking-[-0.015em] text-foreground md:text-xl lg:text-3xl">
                The Great Barrier
              </h2>
              <p className="mt-4 text-left text-base/6 text-foreground-200">
                Walk through our 360-degree glass tunnel as thousands of tropical fish and rays glide overhead in our massive 2-million-gallon exhibit.
              </p>
            </div>
            <img
              src="/images/attraction-1.png"
              width={500}
              height={500}
              alt="Great Barrier Reef exhibit"
              className="absolute -bottom-10 -right-4 grayscale filter transition-all duration-500 hover:grayscale-0 md:-right-[40%] lg:-right-[20%] object-contain rounded-2xl"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-background-900">
            <h2 className="max-w-80 text-left text-balance text-base font-semibold tracking-[-0.015em] text-foreground md:text-xl lg:text-3xl">
              Jellyfish Symphony
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-foreground-200">
              Witness the mesmerizing dance of the Pacific Sea Nettles in a room of infinite mirrors.
            </p>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-background-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm text-left text-balance text-base font-semibold tracking-[-0.015em] text-foreground md:text-xl lg:text-3xl">
                Predators of the Deep
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-foreground-200">
                Come face to face with the ocean's most misunderstood hunters. Our conservation program focuses on shark protection and education.
              </p>
            </div>
            <img
              src="/images/attraction-2.png"
              width={500}
              height={500}
              alt="Shark exhibit"
              className="absolute -bottom-10 -right-10 md:-right-[40%] lg:-right-[10%] object-contain rounded-2xl opacity-80"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default AttractionsGrid;
