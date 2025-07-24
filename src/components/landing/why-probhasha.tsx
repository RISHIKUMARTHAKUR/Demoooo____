
'use client';

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const keyPoints = [
  "Live Training Sessions",
  "Instant Feedback",
  "Daily Drills",
  "Mock Sessions",
  "Regular Practice",
  "Career Advice",
];

const quotes = [
    "Been There. Fought That. Now I Teach It.",
    "This Isn’t Just a website or course. This Is My Mission.",
    "Not Just a Trainer. A Fellow Traveller."
]

export function WhyProBhasha() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold" style={{ color: '#004000' }}>
            Why ProBhasha?
          </h2>
           <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2">
                {quotes.map((quote, index) => (
                    <p key={index} className="font-headline italic text-base text-foreground/80">
                        {quote}
                    </p>
                ))}
            </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={point}
                className={cn(
                  "flex items-center p-4 rounded-lg bg-muted transition-transform duration-200 ease-out",
                  "hover:shadow-xl hover:scale-105",
                   inView ? 'animate-slide-in-from-right' : 'opacity-0'
                )}
                 style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArrowRight className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-body font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
