'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { levels } from '@/data'; // Ensure `levels` is properly typed

const TutorialCardPage = () => {
  const params = useParams();
  const router = useRouter();
  const tutorialIndex = params.tutorialIndex;
  const cardIndex = params.cardIndex;

  // Convert query parameters to numbers safely
  const tutorialIdx = tutorialIndex ? Number(tutorialIndex) : NaN;
  const cardIdx = cardIndex ? Number(cardIndex) : NaN;

  // Check if indices are valid numbers
  if (isNaN(tutorialIdx) || isNaN(cardIdx) || tutorialIdx <= 0 || cardIdx <= 0) {
    return <p className="text-center">Invalid level or card index.</p>;
  }

  // Find the level data dynamically using the converted index
  const level = levels[tutorialIdx - 1]; // Levels are 1-based

  if (!level) {
    return <p className="text-center">Level not found.</p>;
  }

  // Find the current card in the level
  const currentCard = level.cards[cardIdx - 1];

  // Determine the previous and next level indexes
  const previousLevelIndex = tutorialIdx > 1 ? tutorialIdx - 1 : null;
  const nextLevelIndex = tutorialIdx < levels.length ? tutorialIdx + 1 : null;

  // Navigation functions
  const goToPreviousLevel = () => {
    if (previousLevelIndex) {
      router.push(`/tutorial/${previousLevelIndex}/level/1`);
    }
  };

  const goToNextLevel = () => {
    if (nextLevelIndex) {
      router.push(`/tutorial/${nextLevelIndex}/level/1`);
    }
  };

  return (
    <main className="page">
      <Header tutorialIndex={tutorialIdx} cardIndex={cardIdx} />
      <div className="box fade-in">
        <h1 className="roboto font-bold text-xl">Level {tutorialIdx}</h1>
        <h2 className="roboto font-medium text-lg">Card {cardIdx}</h2>
        <p>{currentCard.text}</p>
        <div className="navigation-buttons">
          <button
            className="btn"
            onClick={goToPreviousLevel}
            disabled={!previousLevelIndex}
          >
            Previous
          </button>
          <button
            className="btn"
            onClick={goToNextLevel}
            disabled={!nextLevelIndex}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default TutorialCardPage;
