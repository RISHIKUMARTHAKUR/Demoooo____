
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BrainCircuit, Briefcase, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const whatsappNumber = '+917982215080';
const demoMessage = encodeURIComponent("I need a Demo session");
const demoWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${demoMessage}`;

const courses = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Spoken English Foundation",
    tagline: "From fear to first sentences",
    for: "For: Beginners or those with hesitation",
    points: [
      "Sentence-building",
      "Day-to-day conversation",
      "Confidence starters",
      "Real feedback and suggestions",
    ],
    duration: "4 weeks",
    mode: "Live 1-to-1 sessions",
    buttons: [
        { text: "Book Free Demo", variant: "outline", action: "link", href: demoWhatsappUrl, external: true },
        { text: "Enroll Now", variant: "default", action: "link", href: "/course-registration" },
    ],
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Conversation Pro",
    tagline: "Talk real. Talk fast. Talk smart.",
    for: "For: Intermediate speakers who want fluency",
    points: [
      "Real-world conversations",
      "Accent softening",
      "Speaking speed + flow",
    ],
    duration: "6 weeks",
    mode: "Live + 1-to-1 sessions",
    buttons: [
        { text: "Take Level Test", variant: "outline", action: "link", href: "/quiz/level-test" },
        { text: "Enroll Now", variant: "default", action: "link", href: "/course-registration" },
    ],
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Interview Fluency Mastery",
    tagline: "Say it right. Crack that interview",
    for: "For: College students / job seekers",
    points: [
      "Interview Q&A",
      "Speak properly",
      "Express accurately",
      "Talk effectively",
      "Body language",
    ],
    duration: "2-4 weeks",
    mode: "1-to-1 sessions + mock interviews",
    buttons: [
        { text: "Book Free Demo", variant: "outline", action: "link", href: demoWhatsappUrl, external: true },
        { text: "Enroll Now", variant: "default", action: "link", href: "/course-registration" },
    ],
  },
   {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Personality Makeover + Communication Lab",
    tagline: "Confidence that speaks before you do",
    for: "For: Anyone seeking life/career transformation",
    points: [
      "Voice training",
      "Public speaking",
      "Dressing + personality tips",
      "Skills to speak, talk and live a content life.",
    ],
    duration: "6-8 weeks",
    mode: "Live + mentor sessions",
    buttons: [
        { text: "Take a Level Test", variant: "outline", action: "link", href: "/quiz/level-test" },
        { text: "Enroll Now", variant: "default", action: "link", href: "/course-registration" },
    ],
  },
];

const ActionButton = ({ button }: { button: any }) => {
    if (button.external) {
        return (
            <Button asChild variant={button.variant} className="w-full">
                <a href={button.href} target="_blank" rel="noopener noreferrer">{button.text}</a>
            </Button>
        )
    }
    return (
        <Button asChild variant={button.variant} className="w-full">
            <Link href={button.href} prefetch={false}>{button.text}</Link>
        </Button>
    )
}

export function CourseSelection() {
   const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Find the Perfect Course for You</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our courses are designed to meet your specific goals, from everyday conversation to professional excellence.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {courses.map((course, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 p-4">
                 <Card className="flex flex-col h-full transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                    <CardHeader className="items-center text-center">
                        {course.icon}
                        <CardTitle className="font-headline text-2xl pt-4">{course.title}</CardTitle>
                        <CardDescription className="font-body pt-1 min-h-[40px]">{course.tagline}</CardDescription>
                        <p className="font-body text-sm font-semibold text-primary pt-2">{course.for}</p>
                    </CardHeader>
                    <CardContent className="flex-grow grid grid-cols-1 gap-6 items-start">
                        <div>
                            <h4 className="font-headline font-semibold text-center mb-3">You'll Learn:</h4>
                            <ul className="space-y-3">
                            {course.points.map((point, i) => (
                                <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="font-body text-foreground/80">{point}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center gap-4 pt-6 mt-auto">
                        <div className="flex justify-between w-full text-sm text-muted-foreground font-body">
                            <span><strong>Duration:</strong> {course.duration}</span>
                            <span><strong>Mode:</strong> {course.mode}</span>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2 mt-2">
                            {course.buttons.map(button => (
                            <ActionButton key={button.text} button={button} />
                            ))}
                        </div>
                    </CardFooter>
                 </Card>
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
