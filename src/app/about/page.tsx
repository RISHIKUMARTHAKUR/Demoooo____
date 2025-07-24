import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 md:py-24 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet Our Founder
            </h1>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6">
              Dr. Neha Sharma Jha
            </h2>
            <p className="font-body text-lg text-foreground/80 mb-4">
              Dr. Neha Sharma Jha is a visionary leader and an acclaimed expert in communication training. With a Ph.D. in English Literature and over 15 years of experience, she has dedicated her career to empowering individuals to overcome their communication barriers and speak with confidence.
            </p>
            <p className="font-body text-lg text-foreground/80 mb-6">
              Her journey began with a simple observation: many talented professionals were held back not by a lack of knowledge, but by a lack of confidence in their spoken English. This insight led to the creation of ProBhasha, a platform built on the principles of personalized learning, practical application, and unwavering support. Dr. Jha's innovative teaching methodologies have transformed the lives of thousands, helping them to excel in their careers and personal lives.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/#courses">Explore Our Courses</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
          <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/Founder.jpg"
              alt="Dr. Neha Sharma Jha"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-contain w-full h-auto"
              data-ai-hint="professional woman portrait"
              />
          </div>
          </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="relative">
              <p className="font-headline text-3xl md:text-4xl italic text-foreground max-w-4xl mx-auto">
                "Our mission is not just to teach English, but to unlock the voice within each learner. Confidence is the key, and communication is the door."
              </p>
          </div>
        </div>
        
        <div className="mt-24">
  <h3 className="text-3xl font-headline font-bold text-center mb-8">Watch Her Story</h3>
  <div className="aspect-video max-w-4xl mx-auto">
    <video
      src="/founder-story.mp4"
      controls
      className="rounded-lg shadow-xl w-full h-full object-contain"
      aria-label="Founder's story video"
    ></video>
  </div>
</div>

      </div>
    </div>
  );
}
