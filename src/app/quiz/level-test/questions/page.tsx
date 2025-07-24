
import { QuizQuestions } from "@/components/quiz/quiz-questions";

const levelTestQuestions = [
  {
    question: "How would you describe your current English ability?",
    options: [
      { text: "I hesitate or avoid speaking. (Beginner)", value: "Beginner" },
      { text: "I can speak casually but struggle with fluency. (Intermediate)", value: "Intermediate" },
      { text: "I can handle interviews but want to express myself better. (Job Seeker)", value: "Job Seeker" },
      { text: "I am fluent but want to improve my public presence and confidence. (Advanced)", value: "Advanced" }
    ],
    name: "current_ability"
  },
  {
    question: "How confident are you in group discussions, interviews, or public speaking?",
    options: [
      { text: "Not comfortable at all.", value: "Not comfortable" },
      { text: "Somewhat comfortable, with pauses.", value: "Somewhat comfortable" },
      { text: "Comfortable in interviews and meetings.", value: "Comfortable" },
      { text: "Very comfortable, including leadership and public speaking.", value: "Very comfortable" }
    ],
    name: "confidence_level"
  },
  {
    question: "How often do you use English actively at work, college, or social settings?",
    options: [
      { text: "Rarely.", value: "Rarely" },
      { text: "Sometimes.", value: "Sometimes" },
      { text: "Regularly, especially in interviews or professional settings.", value: "Regularly" },
      { text: "Daily, including public speaking, presenting, or team management.", value: "Daily" }
    ],
    name: "usage_frequency"
  }
];


export default function LevelTestQuestionsPage() {
    return (
        <QuizQuestions 
            questions={levelTestQuestions}
            quizTitle="Level Test"
            quizDescription="Answer these questions to help us understand your English level."
        />
    )
}
