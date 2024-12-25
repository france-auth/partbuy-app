"use client";

import { useState } from "react";
import Button from "./ui/Button"; // Adjust the import path based on your project structure

const Quiz = () => {
  const [activeCard, setActiveCard] = useState(0); // Current card index
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question index
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    const currentCard = quizCards[activeCard];
    setIsCorrect(index === currentCard.questions[currentQuestion].correctAnswer);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert("Please select an answer before proceeding.");
      return;
    }

    const currentCard = quizCards[activeCard];

    if (currentQuestion < currentCard.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else if (activeCard < quizCards.length - 1) {
      setActiveCard(activeCard + 1);
      setCurrentQuestion(0);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      alert("You have completed all quizzes!");
    }
  };

  interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct answer
  }

  interface QuizCard {
    cardId: number;
    title: string;
    questions: Question[];
  }

  const quizCards: QuizCard[] = [
    {
      cardId: 1,
      title: "REINFORCE LEARNING THROUGH AN INTERACTIVE QUIZ",
      questions: [
        {
          id: 1,
          question: "What is a Real-World Asset (RWA)?",
          options: [
            "Digital currencies",
            "Physical, tangible assets like real estate",
            "Virtual reality properties",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question: "What is blockchain?",
          options: [
            "A digital ledger",
            "A type of database",
            "A cryptocurrency",
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      cardId: 2,
      title: "TEST YOUR KNOWLEDGE ON CRYPTOCURRENCY",
      questions: [
        {
          id: 1,
          question: "What is Bitcoin?",
          options: [
            "A type of digital asset",
            "A payment network",
            "Both a and b",
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          question: "Which of these is a cryptocurrency?",
          options: ["Ethereum", "Visa", "PayPal"],
          correctAnswer: 0,
        },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto bg-black text-color fade-in">
      <p className="text-start top-text">
        {quizCards[activeCard].title}
      </p>
      <div className="mt-6 box ">
        <p className="text-center font-medium">
          {quizCards[activeCard].questions[currentQuestion].question}
        </p>
        <div className="mt-4 space-y-2">
          {quizCards[activeCard].questions[currentQuestion].options.map(
            (option, index) => (
              <Button
                key={index}
                name={option}
                onClick={() => handleOptionSelect(index)}
                className={`block border w-full py-2 px-4 rounded-md text-left transition-colors ${
                  selectedOption === index
                    ? isCorrect
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-800 hover:border-gray-700"
                }`}
              />
            )
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-col-reverse justify-between items-center">
        <div className="flex space-x-1">
          {quizCards[activeCard].questions.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentQuestion === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
        <Button
          name="NEXT QUESTION"
          onClick={handleNextQuestion}
          className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        />
      </div>
    </div>
  );
};

export default Quiz;