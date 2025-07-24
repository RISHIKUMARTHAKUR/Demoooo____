
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { HelpCircle, BarChart3, Bot } from 'lucide-react';

const quizzes = [
  {
    icon: <HelpCircle className="h-10 w-10 text-primary" />,
    title: 'Free Fluency Assessment',
    description: 'Quickly check your current spoken English level with our 5-minute test.',
    buttonText: 'Start Assessment',
    href: '/quiz/fluency-assessment',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: 'Detailed Level Test',
    description: 'A comprehensive quiz to pinpoint your exact strengths and weaknesses.',
    buttonText: 'Take the Test',
    href: '/quiz/detailed-test',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI Course Recommender',
    description: 'Let our AI analyze your needs and suggest the perfect course for you.',
    buttonText: 'Get Recommendation',
    href: '#recommender',
  },
];

export function QuizSection() {
  return (
    <section id="quizzes" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Not Sure Where to Start?</h2>
          <p className="font-body text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our interactive tools will guide you to the course that best fits your needs and goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="text-center shadow-lg flex flex-col transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
              <CardHeader className="items-center">
                {quiz.icon}
                <CardTitle className="font-headline text-2xl pt-4">{quiz.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4 flex-grow">
                <CardDescription className="font-body min-h-[40px]">{quiz.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <Button asChild className="w-full md:w-auto">
                  <Link href={quiz.href} prefetch={false}>{quiz.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
