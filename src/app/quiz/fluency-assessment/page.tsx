
'use client';
import { QuizStartForm } from '@/components/quiz/quiz-start-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function FluencyAssessmentStartPage() {
    return (
        <div className="bg-muted py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <Card className="max-w-2xl mx-auto shadow-2xl">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center text-primary">Free Fluency Assessment</CardTitle>
                        <CardDescription className="text-center font-body">
                           First, let's get a few details from you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <QuizStartForm quizType="fluency-assessment" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
