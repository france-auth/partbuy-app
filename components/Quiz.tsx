"use client";

import Header from "./Header";
import { useState } from "react";
import { quizCards } from "@/data";
import { useParams } from "next/navigation";
import Button from "./ui/Button"; // Adjust the import path based on your project structure

interface ShowQuiz {
  showQuiz: boolean;
}

const Quiz: React.FC<ShowQuiz> = ({ showQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the question within the current card
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ question: string; correctAnswer: string }[]>([]); // Updated to store correct answers
  const [showSummary, setShowSummary] = useState(false);
  const [rewardMessage, setRewardMessage] = useState<boolean | null>(false);

  const params = useParams();

  // Extract tutorial and card indices from params
  const tutorialIndex = params?.tutorialIndex ? Number(params.tutorialIndex) : 0;

  // Adjust for 0-based indexing if necessary
  const tutorialIdx = tutorialIndex > 0 ? tutorialIndex - 1 : 0;

  // Fetch the current quiz card
  const currentCard = quizCards[tutorialIdx];
  const currentQuestions = currentCard?.questions;

  const claimRewards = () => setRewardMessage(true);

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
  
      const currentQuestion = currentQuestions[currentQuestionIndex][0];
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: currentQuestion.question,
          correctAnswer: String(currentQuestion.options[currentQuestion.correctAnswer]),
        },
      ]);
  
      if (currentQuestions && currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setShowSummary(true);
      }
  };
  
  return (
    <main className="page text-color">
      {showQuiz && (
        <div className="w-screen">
          {/* Pass consistent props to Header */}
          {showSummary ? (
            <Header summary={true} tutorialIndex={tutorialIdx + 1} />
          ) : (
            <Header tutorialIndex={tutorialIdx + 1} cardIndex={10} />
          )}
        </div>
      )}
      <div className="w-full text-color fade-in mt-14">
        {currentCard ? (
          !showSummary ? (
            <div className="w-full">
              <div className="box">
              <p className="text-start top-text">{currentCard.title}</p>
              </div>
              <div className="w-full mt-4 box text-start">
                <p className={`fade-in roboto font-bold text-xs leading-[14.06px] text-color`}>
                  {currentQuestions[currentQuestionIndex][0].question}
                </p>
                <div className={`fade-in mt-4 w-full flex flex-col justify-start ash-text`}>
                  {currentQuestions[currentQuestionIndex][0].options.map((option, index) => (
                    <div
                      key={index}
                      className="fade-in w-full flex box-border items-center gap-2 py-3"
                      onClick={() => handleOptionSelect(index)}
                    >
                      <span
                        className={`w-[13px] h-[12px] flex items-center justify-center border-2 border-[#3246DA] bg-black rounded-full`}
                      >
                        {selectedOption === index && (
                          <span className="flex place-self-center w-[6px] h-[6px] rounded-full bg-[#3246DA]" />
                        )}
                      </span>
                      <div className={`w-full fade-in`}>{option}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-in mt-4 flex flex-col-reverse justify-between items-center">
                {/* Progress indicators */}
                <div className="flex space-x-2 mt-2">
                  {currentQuestions.map((_, index) => (
                    <span
                      key={index}
                      className={`w-[12px] h-[12px] flex items-center justify-center border-2 rounded-full ${
                        currentQuestionIndex === index ? "border-[#3246DA]" : "border-black"
                      }`}
                    >
                      <span className="flex place-self-center w-[6px] h-[6px] rounded-full bg-[#3246DA]" />
                    </span>
                  ))}
                </div>
                {/* Next button */}
                <Button
                  name={
                    currentQuestionIndex === currentQuestions.length - 1
                      ? "submit"
                      : "next question"
                  }
                  src="/tutorial/rocket.svg"
                  width={15}
                  height={15}
                  onClick={handleNextQuestion}
                  className="transition-all duration-1000 w-full dashboard-button mt-4"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4">
              <div className="box">
                {!rewardMessage ? (
                  <p className="roboto top-text">Answers</p>
                ) : (
                  <p className="roboto text-color font-bold text-3xl leading-[37.5px] uppercase">
                    congratulations
                  </p>
                )}
              </div>
              {!rewardMessage ? (
                <div className="space-y-4 box">
                  {answers.map((answer, index) => (
                    <div key={index} className="w-full fade-in flex flex-col gap-2">
                      <p className="roboto font-bold text-xs leading-[14.06px] text-color">
                        {answer.question}
                      </p>
                      <div className="w-full flex gap-2 items-center">
                        <span className="w-[8px] h-[8px] bg-[#3246DA] rounded-full" />
                        <p className="ash-text">{answer.correctAnswer}</p> {/* Display the correct answer */}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="box">
                  <p className="roboto font-bold text-xl leading-[23.44px] text-color">
                    100 Tokens has been deposited to your virtual wallet
                  </p>
                </div>
              )}
              {!rewardMessage ? (
                <Button
                  name="claim rewards"
                  src="/tutorial/rocket.svg"
                  width={15}
                  height={15}
                  onClick={claimRewards}
                  className="transition-all duration-1000 w-full dashboard-button mt-4"
                />
              ) : (
                <Button
                  name="back to dashboard"
                  link="/"
                  className="transition-all duration-1000 w-full dashboard-button mt-4"
                />
              )}
            </div>
          )
        ) : (
          <p className="text-center text-red-500">Invalid quiz data!</p>
        )}
      </div>
    </main>
  );
};

export default Quiz;
