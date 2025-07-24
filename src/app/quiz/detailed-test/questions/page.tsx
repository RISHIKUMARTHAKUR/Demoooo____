
import { QuizQuestions } from "@/components/quiz/quiz-questions";

const detailedTestQuestions = [
  {
    question: "What is your biggest English challenge?",
    options: [
      { text: "I can understand, but I can’t speak clearly.", value: "A" },
      { text: "I can speak casually, but I hesitate in formal situations.", value: "B" },
      { text: "I can speak well but get stuck in interviews or public speaking.", value: "C" },
      { text: "I want to lead teams and influence through communication.", value: "D" }
    ],
    name: "q1_challenge"
  },
  {
    question: "What’s your goal for learning English?",
    options: [
      { text: "Build basic confidence.", value: "A" },
      { text: "Speak fluently in real-life conversations.", value: "B" },
      { text: "Crack job interviews confidently.", value: "C" },
      { text: "Build a confident, professional personality.", value: "D" }
    ],
    name: "q2_goal"
  },
  {
    question: "How often do you currently practice English speaking?",
    options: [
      { text: "Rarely.", value: "A" },
      { text: "Sometimes.", value: "B" },
      { text: "Regularly.", value: "C" },
      { text: "Daily.", value: "D" }
    ],
    name: "q3_practice"
  }
];

export default function DetailedTestQuestionsPage() {
    return (
        <QuizQuestions 
            questions={detailedTestQuestions}
            quizTitle="Detailed Test"
            quizDescription="Answer these questions for a detailed analysis."
        />
    )
}
