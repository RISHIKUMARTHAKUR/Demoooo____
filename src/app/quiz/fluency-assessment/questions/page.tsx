
import { QuizQuestions } from "@/components/quiz/quiz-questions";

const fluencyAssessmentQuestions = [
  {
    question: "How comfortable are you introducing yourself in English?",
    options: [
      { text: "I freeze / struggle", value: "A" },
      { text: "I can say basic things", value: "B" },
      { text: "I sound confident and clear", value: "C" }
    ],
    name: "q1_introduction"
  },
  {
    question: "Can you explain your study or work background in 1–2 minutes without breaks?",
    options: [
      { text: "Not really", value: "A" },
      { text: "Yes, but with pauses and searching for words", value: "B" },
      { text: "Smoothly and fluently", value: "C" }
    ],
    name: "q2_background"
  },
  {
    question: "When someone speaks fast English, do you:",
    options: [
      { text: "Miss half of it", value: "A" },
      { text: "Understand but can’t reply fast", value: "B" },
      { text: "Understand fully and respond easily", value: "C" }
    ],
    name: "q3_comprehension"
  },
  {
    question: "Have you ever spoken in front of a group or class in English?",
    options: [
      { text: "Never", value: "A" },
      { text: "Once or twice, felt nervous", value: "B" },
      { text: "Many times, feel comfortable", value: "C" }
    ],
    name: "q4_public_speaking"
  },
  {
    question: "Can you write a professional email in English confidently?",
    options: [
      { text: "No", value: "A" },
      { text: "With help / Google Translate", value: "B" },
      { text: "Yes, easily", value: "C" }
    ],
    name: "q5_writing"
  },
  {
    question: "What describes you best?",
    options: [
      { text: "“I know English but can’t speak confidently.”", value: "A" },
      { text: "“I manage but want to get fluent.”", value: "B" },
      { text: "“I’m already fluent and want to polish my skills.”", value: "C" }
    ],
    name: "q6_self_description"
  }
];

export default function FluencyAssessmentQuestionsPage() {
    return (
        <QuizQuestions 
            questions={fluencyAssessmentQuestions}
            quizTitle="Free Fluency Assessment"
            quizDescription="Answer these questions to help us assess your fluency."
        />
    )
}
