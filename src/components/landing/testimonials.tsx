
'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import { PlayCircle, Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    name: 'Sahaj Khunteta',
    title: 'Marketing and Analytics',
    testimonial: "Neha Ma’am’s classes were  always well structured.—it’s never random or rushed. Her enthusiasm is truly infectious; she lifts the energy in every session. What truly amazed me was her flawless command of logic, analysis and teaching method  and her near-native pronunciation",
    avatar: '/Sahaj.png',
    type: 'video',
    hint: 'smiling man',
    linkedin: 'https://www.linkedin.com/in/sahaj-khunteta-9455b844/'
  },
  {
    name: 'Tanmay Mittal',
    title: 'Product Manager',
    testimonial: "What stood out to me was how Neha Ma’am tailors each session to our personal and professional goals. Her guidance is empathetic yet firm. She doesn’t just teach English; she prepares you to present yourself as a polished professional. ",
    avatar: '/Tanmay.png',
    type: 'text',
    hint: 'woman portrait',
    linkedin: 'https://www.linkedin.com/in/tanmaymittal/'
  },
  {
    name: 'Akshat Yadav',
    title: 'Student',
    testimonial: "Neha Ma'am is one of the warmest and fun teacher I have ever met… Great passion for teaching, full energy in every class… I could ask her any doubt and she clears it.",
    avatar: '/Akshat.png',
    type: 'audio',
    hint: 'young man',
  },
  {
    name: 'Sanyogita',
    title: 'Writer|Author',
    testimonial: "Neha Ma’am is far more than just a spoken English trainer—she is a master life-skills mentor. Through her deeply insightful sessions, she nurtures not only clarity in speech but unwavering self-assurance, resilience, and leadership presence.",
    avatar: '/Sanyogita.png',
    type: 'text',
    hint: 'professional woman',
    linkedin: 'https://www.linkedin.com/in/sanyogita-agrahari-9a227b214/'
  },
  {
    name: 'Shubhangi Sharma',
    title: 'Postdoctoral Research Associate',
    testimonial: " Neha Ma’am possesses an exceptional depth of knowledge. What truly sets her apart is how effortlessly she breaks down complex rules and  ideas into simple, relatable examples—often sprinkled with light-hearted humor that makes her classes fun.",
    avatar: '/Shubhangi.png',
    type: 'text',
    hint: 'smiling woman',
    linkedin: 'https://www.linkedin.com/in/shubhangi-sharma-0506503b/'
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What Our Learners Say</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from people who transformed their careers with us.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-md transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <Avatar className="w-20 h-20 mb-4">
                        <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.hint} />
                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-headline font-semibold text-xl">
                        {item.linkedin ? (
                          <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{item.title}</p>
                      <div className="flex justify-center my-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400"/>)}
                      </div>
                      <p className="font-body text-foreground/80 mt-2 flex-grow">"{item.testimonial}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
