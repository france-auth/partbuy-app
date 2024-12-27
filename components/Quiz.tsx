"use client";

import { useState } from "react";
import { quizCards } from "@/data";
import { useParams } from "next/navigation";
import Button from "./ui/Button"; // Adjust the import path based on your project structure

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the question within the current card
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const params = useParams();
  
  // Extract tutorial and card indices from params
  const tutorialIndex = params?.tutorialIndex ? Number(params.tutorialIndex) : 0;
  const tutorialIdx = tutorialIndex - 1; // Adjust for 0-based indexing

  // Fetch the current quiz card
  const currentCard = quizCards[tutorialIdx];
  const currentQuestions = currentCard?.questions;

  // Handle option selection
  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    if (currentQuestions) {
      const isAnswerCorrect =
        index === currentQuestions[currentQuestionIndex][0].correctAnswer;
      setIsCorrect(isAnswerCorrect);
    }
  };

  // Handle "Next Question" functionality
  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (currentQuestions && currentQuestionIndex < currentQuestions.length - 1) {
      // Move to the next question in the current card
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      alert("You have completed all questions in this quiz!");
    }
  };

  return (
    <div className="w-full mx-auto bg-black text-color fade-in">
      {currentCard ? (
        <>
          <p className="box text-start top-text">{currentCard.title}</p>
          <div className="mt-4 box">
            <p className="text-center roboto font-bold text-xs leading-[14.06px] text-color">
              {currentQuestions[currentQuestionIndex][0].question}
            </p>
            <div className="mt-4 space-y-2 ash-text">
              {currentQuestions[currentQuestionIndex][0].options.map(
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
            {/* Progress indicators */}
            <div className="flex space-x-1">
              {currentQuestions.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentQuestionIndex === index
                      ? "bg-blue-500"
                      : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
            {/* Next button */}
            <Button
              name="NEXT QUESTION"
              onClick={handleNextQuestion}
              className="transition-all duration-1000 w-full dashboard-button mt-4"
            />
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">Invalid quiz data!</p>
      )}
    </div>
  );
};

export default Quiz;
