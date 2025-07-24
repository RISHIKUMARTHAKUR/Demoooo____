
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getCourseRecommendations } from '@/app/actions';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function AiRecommender() {
  const [state, formAction] = useActionState(getCourseRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.message === 'success' && state.data) {
        toast({
            title: "Recommendations Ready!",
            description: "We've generated your personalized course plan.",
        });
        formRef.current?.reset();
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (state.message === 'Validation failed') {
        toast({
            title: "Oops!",
            description: state.errors?.fluencyQuizResults?.[0] || 'Please check your input.',
            variant: "destructive"
        });
    } else if (state.message && state.message !== 'success') {
         toast({
            title: "Error",
            description: state.message,
            variant: "destructive"
        });
    }
  }, [state, toast]);

  return (
    <section id="recommender" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
            <Sparkles className="h-10 w-10 text-primary" />
            AI-Powered Course Recommender
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Describe your English speaking challenges or paste your fluency quiz results below. Our AI will craft a personalized learning path just for you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <form action={formAction} ref={formRef}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Bot className="h-6 w-6" />
                  Your Input
                </CardTitle>
                <CardDescription>
                  For example: "I struggle with speaking confidently in meetings and my vocabulary is limited."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="fluencyQuizResults"
                  placeholder="Tell us about your English speaking goals and challenges..."
                  rows={6}
                  required
                />
              </CardContent>
              <CardFooter className="justify-end">
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>

        {state.data && (
          <div ref={resultRef} className="mt-12 max-w-3xl mx-auto">
             <Card className="bg-muted border-primary/20 shadow-xl">
                 <CardHeader>
                     <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                         <Sparkles className="h-6 w-6"/>
                         Your Personalized Recommendations
                     </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-headline font-semibold text-lg mb-2">Recommended Courses:</h4>
                        <ul className="list-disc list-inside space-y-1 font-body">
                            {state.data.courseRecommendations.map((course: string, index: number) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-headline font-semibold text-lg mb-2">Reason:</h4>
                        <p className="font-body text-foreground/80">{state.data.reasoning}</p>
                     </div>
                 </CardContent>
             </Card>
          </div>
        )}
      </div>
    </section>
  );
}
