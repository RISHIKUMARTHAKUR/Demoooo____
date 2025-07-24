'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const offerings = [
  "Fluency for First-Gen Professionals",
  "Spoken English + Personality for Tier-2 Graduates",
  "Special courses in communication for school students",
  "Study abroad SOP assistance services",
  "GMAT/GRE/SAT/IELTS /TOEFL prep",
  "Job Interview English for Final-Year Students",
  "Fluency Boost for Housewives Rejoining Work",
];

export function OfferingsSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {offerings.map((text, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                    <div className="p-6 flex flex-col items-center text-center flex-grow">
                        <p className="font-body font-bold text-lg">{text}</p>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
