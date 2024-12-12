'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { levels } from '@/data'; // Ensure `levels` is properly imported
import Button from '@/components/ui/Button';

const TutorialCardPage = () => {
  const params = useParams();
  const router = useRouter();

  const tutorialIndex = params.tutorialIndex;
  const cardIndex = params.cardIndex;

  // Convert query parameters to numbers safely
  const tutorialIdx = tutorialIndex ? Number(tutorialIndex) : NaN;
  const cardIdx = cardIndex ? Number(cardIndex) : NaN;

   // Validate indices
  if (isNaN(tutorialIdx) || isNaN(cardIdx) || tutorialIdx <= 0 || cardIdx <= 0) {
    return <p className="text-center">Invalid level or card index.</p>;
  }

  // Access the current level
  const level = levels[tutorialIdx - 1]; // Adjust for 0-based indexing
  if (!level) {
    return <p className="text-center">Level not found.</p>;
  }

  // Calculate previous and next level indices
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
      <div className="w-full fade-in">
        {/* Map over all cards and display them */}
        <div className="w-full space-y-4">
          {level.cards.map((card, id) => (
            <div key={id} className="box">
              <p className="top-text">
                {card[id].text}
              </p>
              <p className=''>
                {card[id].description}
              </p>
            </div>
          ))}
        </div>
      </div>
        <div className="w-full grid grid-cols-2 justify-items-center gap-3 mt-4">
          {/* Next Button */}
          {tutorialIdx > 1 && (
                <Button
                  name="Previous"
                  onClick={goToPreviousLevel}
                  className={`${tutorialIdx > level.cards.length - 1 ? 'col-span-2' : 'col-span-1' }  transition-all duration-1000 w-full grid tier-button shadow`}
                />
              )}
              {/* Next Button */}
              {tutorialIdx > 0 && (
                <Button
                  name="Next"
                  onClick={goToNextLevel}
                  className={`${tutorialIdx === level.cards.length - 1
                    ? 'hidden' 
                    : tutorialIdx === 1
                    ? 'col-span-2' : 'col-span-1'} transition-all duration-1000 w-full grid tier-button shadow`}
                />
              )}
        </div>
    </main>
  );
};

export default TutorialCardPage;
