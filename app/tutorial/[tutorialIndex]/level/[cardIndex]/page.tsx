'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { levels } from '@/data'; // Ensure `levels` is properly imported
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Quiz from '@/components/Quiz'; // Import the Quiz component

const TutorialCardPage = () => {
  const params = useParams();
  const router = useRouter();
  const tutorialIndex = params.tutorialIndex;
  const cardIndex = params.cardIndex;

  const tutorialIdx = tutorialIndex ? Number(tutorialIndex) : NaN;
  const cardIdx = cardIndex ? Number(cardIndex) : NaN;

  const [showQuiz, setShowQuiz] = useState(false);

  if (isNaN(tutorialIdx) || isNaN(cardIdx) || tutorialIdx <= 0 || cardIdx <= 0) {
    return <p className="text-center">Invalid level or card index.</p>;
  }

  const level = levels[tutorialIdx - 1];
  if (!level) {
    return <p className="text-center">Level not found.</p>;
  }

  const previousLevelIndex = cardIdx > 1 ? cardIdx - 1 : null;
  const nextLevelIndex = cardIdx < level.cards.length ? cardIdx + 1 : null;

  const goToPreviousLevel = () => {
    if (previousLevelIndex) {
      router.push(`/tutorial/${tutorialIdx}/level/${previousLevelIndex}`);
    }
  };

  const goToNextLevel = () => {
    if (nextLevelIndex) {
      router.push(`/tutorial/${tutorialIdx}/level/${nextLevelIndex}`);
    }
  };

  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  return (
    <main className="page text-color">
      <Header tutorialIndex={tutorialIdx} cardIndex={cardIdx} />
      <div className="w-full mt-16 overflow-y-scroll">
        {!showQuiz ? (
          <div className="w-full space-y-4 fade-in">
            {level.cards[cardIdx - 1].map((card, groupIdx) => (
              <div key={groupIdx} className="space-y-4 box rounded-sm shadow-md">
                <p className="top-text">{card.text}</p>
                <p className="ash-text">{card.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <Quiz /> // Embed the Quiz component here
        )}
      </div>
      <div className="w-full grid grid-cols-2 justify-items-center gap-3 ">
        {!showQuiz ? (
          <>
            {cardIdx > 1 && (
              <Button
                name="Previous"
                src='/dashboard/buy-property.svg'
                width={15}
                height={15}
                reverse
                onClick={goToPreviousLevel}
                className={`${cardIdx === 0 ? 'hidden' : cardIdx === level.cards.length ? 'col-span-2' : 'col-span-1'}  
                transition-all duration-1000 w-full dashboard-button shadow`}
              />
            )}
            {cardIdx > 0 && (
              <Button
                name="Next"
                src='/dashboard/buy-property.svg'
                width={15}
                height={15}
                reverse
                onClick={goToNextLevel}
                className={`${cardIdx === level.cards.length
                  ? 'hidden' 
                  : cardIdx === 1
                  ? 'col-span-2' : 'col-span-1'} 
                  transition-all duration-1000 w-full dashboard-button shadow`}
              />
            )}
            <Button
              name="Take a quick quiz"
              src='/tutorial/rocket.svg'
              reverse
              width={15}
              height={15}
              onClick={handleQuizClick}
              className="transition-all duration-1000 w-full grid col-span-2 dashboard-button shadow"
            />
          </>
        ) : null}
      </div>
      <Navbar />
    </main>
  );
};

export default TutorialCardPage;
