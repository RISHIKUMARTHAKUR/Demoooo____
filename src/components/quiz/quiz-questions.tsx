
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getCourseRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const initialState = {
  message: '',
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing Results...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Get My Course Recommendation
        </>
      )}
    </Button>
  );
}

type Question = {
  question: string;
  options: { text: string; value: string }[];
  name: string;
};

type QuizQuestionsProps = {
  questions: Question[];
  quizTitle: string;
  quizDescription: string;
};

export function QuizQuestions({ questions, quizTitle, quizDescription }: QuizQuestionsProps) {
  const [state, formAction] = useActionState(getCourseRecommendations, initialState);
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.message === 'success' && state.data) {
      toast({
        title: 'Recommendations Ready!',
        description: "We've generated your personalized course plan.",
      });
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (state.message && state.message !== 'success') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {!state.data ? (
          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-center text-primary">
                {quizTitle}
              </CardTitle>
              <CardDescription className="text-center font-body">
                {quizDescription}
              </CardDescription>
            </CardHeader>
            <form action={formAction}>
              <CardContent className="space-y-8">
                {questions.map((q, index) => (
                  <fieldset key={index} className="space-y-4">
                    <legend className="font-body font-semibold text-lg">
                      {index + 1}. {q.question}
                    </legend>
                    <RadioGroup name={q.name} required className="space-y-2 pl-4">
                      {q.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${q.name}-${option.value}`} />
                          <Label htmlFor={`${q.name}-${option.value}`} className="font-body">
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </fieldset>
                ))}
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        ) : (
          <div ref={resultRef} className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-muted border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                  <Sparkles className="h-6 w-6" />
                  Your Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-2">
                    Recommended Course:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 font-body text-lg">
                    {state.data.courseRecommendations.map((course: string, index: number) => (
                      <li key={index} className="font-bold text-primary">{course}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-2">Reason:</h4>
                  <p className="font-body text-foreground/80">{state.data.reasoning}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                    <a href="/course-registration">Enroll Now and Start Your Transformation!</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
