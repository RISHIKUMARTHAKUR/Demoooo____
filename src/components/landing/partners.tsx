
'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const institutions = [
  "DAV, Yamuna Nagar",
  "DAV, Surat, Gujarat",
  "University of Wollongong, Dubai",
  "UNDP",
  "Ashoka University, Varanasi",
  "JayotiVidyapeeth, Rajasthan",
  "The Pioneer Media School, Delhi",
  "IBMR College, Gurgaon",
  "Government of Delhi",
  "Rashtrakavi Ramdhari Singh Dinkar College, Begusarai, Bihar",
  "Government Engineering College Khagariya, Bihar",
  "Saharsa College of Engineering, Saharsa, Bihar",
  "Muzaffarpur Institute of Technology, Bihar",
  "Darbhanga College of Engineering, Darbhanga",
];

export function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Our Founder has Trained Professionals At
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/certifications.jpg"
              alt="Logos of partner institutions"
              width={960}
              height={540}
              className="rounded-md shadow-lg w-full max-w-lg object-contain"
            />
          </div>

          <div className="relative">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full hidden md:block"></div>
             <div className="md:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {institutions.map((inst, index) => (
                    <div
                        key={inst}
                        className={cn(
                        "flex items-center p-3 rounded-lg bg-background shadow-sm transition-transform duration-300 hover:shadow-xl hover:scale-105",
                         inView ? 'animate-slide-in-from-right' : 'opacity-0'
                        )}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <ArrowRight className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="font-body font-medium text-sm">{inst}</span>
                    </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
