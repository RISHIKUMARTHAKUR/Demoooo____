import { Hero } from "@/components/landing/hero";
import { Partners } from "@/components/landing/partners";
import { CourseSelection } from "@/components/landing/course-selection";
import { FounderPreview } from "@/components/landing/founder-preview";
import { Testimonials } from "@/components/landing/testimonials";
import { QuizSection } from "@/components/landing/quiz-section";
import { AiRecommender } from "@/components/landing/ai-recommender";
import { OfferingsSlider } from "@/components/landing/offerings-slider";
import { WhyProBhasha } from "@/components/landing/why-probhasha";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Hero />
      <WhyProBhasha />
      <CourseSelection />
      <OfferingsSlider />
      <Partners />
      <FounderPreview />
      <Testimonials />
      <QuizSection />
      <AiRecommender />
    </div>
  );
}
