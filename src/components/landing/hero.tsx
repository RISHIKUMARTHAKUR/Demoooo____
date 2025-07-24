import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Counter } from './counter';

export function Hero() {
  return (
    <section className="relative w-full bg-background flex items-center justify-center text-center py-24 md:py-32">
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            ProBhasha- Talk Like a Pro
          </h1>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground/80 sm:text-4xl md:text-5xl mt-4">
             Talk fluently in English and Hindi.
          </h2>
          <div className="mt-6 text-lg md:text-xl font-body text-foreground/70">
            <p>
              We take you from ‘I know English’ to ‘I express, impress, and lead in English and Hindi.’
            </p>
            <p className="font-headline italic mt-2 text-primary">
              Experience the art of communication and confidence with ProBhasha -Talk Like a Pro.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#courses" prefetch={false}>Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/quiz/fluency-assessment" prefetch={false}>Take Free Fluency Test</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-foreground max-w-4xl mx-auto">
            <div>
                <h3 className="text-4xl font-bold text-foreground/70">
                    <Counter end={500} duration={1.5} />+
                </h3>
                <p className="font-body text-base font-semibold">Students Transformed</p>
            </div>
             <div>
                <h3 className="text-4xl font-bold text-foreground/70">
                    <Counter end={12} duration={1.5} />+
                </h3>
                <p className="font-body text-base font-semibold">Nationalities Taught</p>
            </div>
             <div>
                <h3 className="text-4xl font-bold text-foreground/70">
                    PhD
                </h3>
                <p className="font-body text-base font-semibold">Expert Guidance</p>
            </div>
        </div>
      </div>
    </section>
  );
}
