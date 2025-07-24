
'use server';

import { personalizedCourseRecommendations } from '@/ai/flows/personalized-course-recommendations';
import { z } from 'zod';


// This function will now handle both the AI recommender form and the quiz forms
export async function getCourseRecommendations(
  prevState: any,
  formData: FormData
) {
  
  const entries = Object.fromEntries(formData.entries());
  let quizResults = '';

  if (entries.fluencyQuizResults) {
     quizResults = entries.fluencyQuizResults as string;
  } else {
     quizResults = Object.entries(entries)
      .map(([question, answer]) => `Q: ${question}\nA: ${answer}`)
      .join('\n\n');
  }

  if (quizResults.length < 10) {
      return {
        message: 'Please provide more details for a better recommendation.',
        errors: null,
    };
  }


  try {
    const result = await personalizedCourseRecommendations({ fluencyQuizResults: quizResults });
    return {
        message: 'success',
        data: result,
    }
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      errors: null,
    };
  }
}
