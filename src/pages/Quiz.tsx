import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import type { Question } from "../data/questions";
import PageLayout from "../components/PageLayout";
import "../styles/quiz.scss";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswerClick = (index: number) => {
    const isCorrect = index === questions[currentQuestion].correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/result", { state: { score: score + (isCorrect ? 1 : 0) } });
    }
  };

  const question: Question = questions[currentQuestion];

  return (
    <PageLayout>
      <h1>
        Domanda {currentQuestion + 1} di {questions.length}
      </h1>
      <p className="quiz-question">{question.text}</p>

      <div className="quiz-options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className="quiz-option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </PageLayout>
  );
};

export default Quiz;
