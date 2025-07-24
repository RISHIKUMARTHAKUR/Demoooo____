'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Counter } from './counter';
import { PlayCircle } from 'lucide-react';

export function FounderPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-video w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <video
          src="/founder-story.mp4"
          controls
          className="w-full h-full object-cover"
          >
          Your browser does not support the video tag.
          </video>
        </div>


          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">From Our Founder</h2>
            <div className="mt-6 border-l-4 border-primary pl-6 space-y-4">
              <p className="font-body text-lg text-foreground/80">
                “I didn’t grow up speaking English. I grew up fearing it.”
              </p>
               <p className="font-body text-lg text-foreground/80">
                I know what it’s like to freeze mid-sentence. To know the answer in your head but not find the words. To feel “less than” because you can’t express yourself.
              </p>
               <p className="font-body text-lg text-foreground/80">
                That’s why I built ProBhasha — not as a school, but as a safe, smart space to train fluency, confidence, and presence, the way I trained mine.
              </p>
              <p className="font-headline text-xl italic text-foreground/90">
                And I am with you.
              </p>
            </div>
             <blockquote className="mt-4">
              <footer className="font-body font-semibold">
                - Dr. Neha Sharma Jha
              </footer>
            </blockquote>
             <p className="font-body text-sm text-foreground/60 mt-4">
                PhD in communication and life skills/ TESOL certified (USA) / M.Phil/ Journalism<br/>CAT/GMAT/IELTS Trainer
             </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about" prefetch={false}>Watch her Journey</Link>
            </Button>
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                <div>
                    <h3 className="text-4xl font-bold text-foreground/70">
                        <Counter end={500} duration={1.5} />+
                    </h3>
                    <p className="text-muted-foreground font-body">Students Transformed</p>
                </div>
                 <div>
                    <h3 className="text-4xl font-bold text-foreground/70">
                        <Counter end={12} duration={1.5} />+
                    </h3>
                    <p className="text-muted-foreground font-body">Nationalities Taught</p>
                </div>
                 <div>
                    <h3 className="text-4xl font-bold text-foreground/70">
                        PhD
                    </h3>
                    <p className="text-muted-foreground font-body">Expert Guidance</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
