"use client";  // This line ensures that the component is treated as a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  {
    level: 1,
    questions: [
      { question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome', 'Berlin'], answer: 'Paris' },
      { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
      { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
      { question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 'Pacific Ocean' },
      { question: 'Which animal is known as the King of the Jungle?', options: ['Elephant', 'Lion', 'Tiger', 'Giraffe'], answer: 'Lion' },
    ],
  },
  {
    level: 2,
    questions: [
      { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'], answer: 'Harper Lee' },
      { question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '100,000 km/s', '200,000 km/s'], answer: '300,000 km/s' },
      { question: 'Which element has the chemical symbol "O"?', options: ['Oxygen', 'Gold', 'Silver', 'Iron'], answer: 'Oxygen' },
      { question: 'In which year did the Titanic sink?', options: ['1912', '1905', '1920', '1898'], answer: '1912' },
      { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'], answer: 'Mitochondria' },
    ],
  },
];

export default function QuizPage() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds for each question

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAnswer(null); // Move to the next question if time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentQuestion]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = questions[currentLevel - 1].questions[currentQuestion].answer === selectedOption;
    if (isCorrect) setScore(score + 1);

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentLevel < 2) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(0);
    } else {
      window.location.href = `/result?score=${score + (isCorrect ? 1 : 0)}`;
    }
    setTimeLeft(15); // Reset the timer for the next question
  };

  const currentQ = questions[currentLevel - 1].questions[currentQuestion];

  return (
    <div className="container">
      <h1>Quiz - Level {currentLevel}</h1>
      <h2>{currentQ.question}</h2>
      <h3>Time Left: {timeLeft}s</h3>
      <div>
        {currentQ.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestion + 1) / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}
