
// src/ai/flows/personalized-course-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized course recommendations based on user fluency quiz results.
 *
 * - personalizedCourseRecommendations - A function that takes fluency quiz results and returns personalized course recommendations.
 * - PersonalizedCourseRecommendationsInput - The input type for the personalizedCourseRecommendations function.
 * - PersonalizedCourseRecommendationsOutput - The return type for the personalizedCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCourseRecommendationsInputSchema = z.object({
  fluencyQuizResults: z.string().describe('The results from the fluency quiz or user description of their challenges.'),
});
export type PersonalizedCourseRecommendationsInput = z.infer<
  typeof PersonalizedCourseRecommendationsInputSchema
>;

const PersonalizedCourseRecommendationsOutputSchema = z.object({
  courseRecommendations: z
    .array(z.string())
    .describe('A list of 1 or at most 2 recommended courses from the available list.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the course recommendations, framed as "These are the topics that will improve you and all these are present in our this course. This is the best course for you."'),
});
export type PersonalizedCourseRecommendationsOutput = z.infer<
  typeof PersonalizedCourseRecommendationsOutputSchema
>;

export async function personalizedCourseRecommendations(
  input: PersonalizedCourseRecommendationsInput
): Promise<PersonalizedCourseRecommendationsOutput> {
  return personalizedCourseRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCourseRecommendationsPrompt',
  input: {schema: PersonalizedCourseRecommendationsInputSchema},
  output: {schema: PersonalizedCourseRecommendationsOutputSchema},
  prompt: `You are an expert course recommender for ProBhasha, a spoken English training platform.

Your task is to recommend one, or at most two, courses from the provided list based on the user's quiz answers or description of their problems.

**Available Courses:**
1.  **Spoken English Foundation**: For absolute beginners who fear speaking. Focuses on sentence building and basic conversation.
2.  **Conversation Pro**: For intermediate speakers who want to improve fluency, speed, and accent.
3.  **Interview Fluency Mastery**: For job seekers. Focuses on interview Q&A, professional expression, and body language.
4.  **Personality Makeover + Communication Lab**: For anyone seeking a major transformation. Focuses on public speaking, voice training, and overall presence.

**User's Input (Quiz results or problem description):**
{{{fluencyQuizResults}}}

**Your Task:**
1.  Analyze the user's input.
2.  Choose the most suitable course(s) from the list above. **DO NOT recommend any course not on this list.**
3.  Generate a response in the required JSON format.
4.  For the 'reasoning' field, explain *why* the course is a good fit. Frame your response like this: "Based on your answers, the key areas for you to improve are [mention specific skills like 'building confidence in basic conversations' or 'handling high-pressure interview questions']. These topics are all central to our [Course Name] course. This is the best course for you to achieve your goals." If recommending two, briefly explain the benefit of each.`,
});

const personalizedCourseRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedCourseRecommendationsFlow',
    inputSchema: PersonalizedCourseRecommendationsInputSchema,
    outputSchema: PersonalizedCourseRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
