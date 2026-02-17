
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="bg-background-900 px-6 py-24 text-foreground-200">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
          Plan Your Voyage
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-border-800">
            <AccordionTrigger className="text-lg hover:text-foreground-400">What are the opening hours?</AccordionTrigger>
            <AccordionContent className="text-foreground-400">
              We are open daily from 9:00 AM to 8:00 PM. Last entry is at 6:30 PM. Special "Midnight Marine" night tours happen on Fridays until 11:00 PM.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-border-800">
            <AccordionTrigger className="text-lg hover:text-foreground-400">Is there parking available?</AccordionTrigger>
            <AccordionContent className="text-foreground-400">
              Yes, we have a multi-level parking structure adjacent to the main entrance. Rates are $15/day or free for Annual Pass holders.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-border-800">
            <AccordionTrigger className="text-lg hover:text-foreground-400">Are outside food and drinks allowed?</AccordionTrigger>
            <AccordionContent className="text-foreground-400">
              To protect our animals and maintain cleanliness, outside food is not permitted. However, we have three sustainable dining options inside the park, including the underwater "Abyss Lounge."
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-border-800">
            <AccordionTrigger className="text-lg hover:text-foreground-400">Do you offer accessibility support?</AccordionTrigger>
            <AccordionContent className="text-foreground-400">
              Absolutely. Leviathan Marine Park is fully wheelchair accessible. We also offer sensory-friendly hours on the first Tuesday of every month.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-6 text-foreground-400">Still have questions?</p>
          <Button size="lg" className="bg-background-600 font-semibold hover:bg-background-500">
            Contact Guest Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
