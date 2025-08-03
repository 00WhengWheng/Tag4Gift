import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'shadcn/ui';

interface Question {
  id: number;
  text: string;
  answers: { id: number; text: string; isCorrect: boolean }[];
}

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    // Fetch questions from the database
    axios.get('/api/quiz/questions').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleAnswerSelect = (answerId: number, isCorrect: boolean) => {
    setSelectedAnswer(answerId);
    setFeedback(isCorrect ? 'Correct!' : 'Wrong answer.');
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <div className="mb-4">
        <p className="text-lg font-medium">{currentQuestion.text}</p>
        <div className="mt-4">
          {currentQuestion.answers.map((answer) => (
            <Button
              key={answer.id}
              onClick={() => handleAnswerSelect(answer.id, answer.isCorrect)}
              className="block w-full mb-2"
              disabled={selectedAnswer !== null}
            >
              {answer.text}
            </Button>
          ))}
        </div>
      </div>
      {feedback && <p className="text-lg font-semibold mb-4">{feedback}</p>}
      {selectedAnswer !== null && currentQuestionIndex < questions.length - 1 && (
        <Button onClick={handleNextQuestion}>Next Question</Button>
      )}
      {selectedAnswer !== null && currentQuestionIndex === questions.length - 1 && (
        <p className="text-lg font-semibold">Quiz Completed!</p>
      )}
    </div>
  );
};

export default QuizPage;
