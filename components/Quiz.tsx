"use client";

import { useState } from "react";
import { quizCards } from "@/data";
import { useParams } from "next/navigation";
import Button from "./ui/Button"; // Adjust the import path based on your project structure

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the question within the current card
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  //const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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
    } else {
      alert("You have completed all questions in this quiz!");
    }
  };

  return (
    <div className="w-full mx-auto bg-black text-color fade-in">
      {currentCard ? (
        <>
          <p className="box text-start top-text">{currentCard.title}</p>
          <div className="mt-4 box text-start ">
            <p className="roboto font-bold text-xs leading-[14.06px] text-color">
              {currentQuestions[currentQuestionIndex][0].question}
            </p>
            <div className="mt-4 w-full flex flex-col justify-start ash-text">
              {currentQuestions[currentQuestionIndex][0].options.map(
                (option, index) => (
                  <div 
                    key={index} 
                    className="w-full flex box-border items-center gap-2 py-3" 
                    onClick={() => handleOptionSelect(index)}
                  >
                    <span className={`w-[12px] h-[12px] flex items-center justify-center border-2 border-[#3246DA] bg-black rounded-full`}>
                      {selectedOption === index && (
                        <span className="w-[6px] h-[6px] rounded-full bg-[#3246DA]" />
                      )}
                    </span>
                    <div 
                      className={`w-full`}
                    >
                      {option}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col-reverse justify-between items-center">
            {/* Progress indicators */}
            <div className="flex space-x-2 mt-2">
              {currentQuestions.map((_, index) => (
                <span
                  key={index}
                  className={`w-[12px] h-[12px] flex items-center justify-center border-2 rounded-full ${currentQuestionIndex === index ? 'border-[#3246DA]' : 'border-black'}`}
                >
                  <span className="flex place-self-center w-[6px] h-[6px] rounded-full bg-[#3246DA]" />
                </span>
              ))}
            </div>
            {/* Next button */}
            <Button
              name="NEXT QUESTION"
              src="/tutorial/rocket.svg"
              width={15}
              height={15}
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
