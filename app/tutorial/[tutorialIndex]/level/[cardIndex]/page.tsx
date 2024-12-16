'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { levels } from '@/data'; // Ensure `levels` is properly imported
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';

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
  const previousLevelIndex = cardIdx > 1 ? cardIdx - 1 : null;
  const nextLevelIndex = cardIdx < levels.length ? cardIdx + 1 : null;

  // Navigation functions
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

  return (
    <main className="page text-color">
      <Header tutorialIndex={tutorialIdx} cardIndex={cardIdx} />
      <div className="w-full">
        {/* Map over all cards and display them */}
        <div className="w-full space-y-4">
          {level.cards.map((card, cardIdx) => (
            <div key={cardIdx} className="box">
              <p className="top-text fade-in">
                {card[cardIdx].text}
              </p>
              <p className='fade-in'>
                {card[cardIdx].description}
              </p>
            </div>
          ))}
        </div>
      </div>
        <div className="w-full grid grid-cols-2 justify-items-center gap-3 mt-4">
          {/* Next Button */}
          {cardIdx > 0 && (
                <Button
                  name="Previous"
                  onClick={goToPreviousLevel}
                  className={`${cardIdx === 1 ? 'hidden' 
                    : cardIdx === 10 ? 'col-span-2' 
                    : 'col-span-1'}  
                    transition-all duration-1000 w-full grid tier-button shadow
                  `}
                />
              )}
              {/* Next Button */}
              {cardIdx > 0 && (
                <Button
                  name="Next"
                  onClick={goToNextLevel}
                  className={`${cardIdx === 10
                    ? 'hidden' 
                    : cardIdx === 1
                    ? 'col-span-2' : 'col-span-1'} 
                    transition-all duration-1000 w-full grid tier-button shadow
                  `}
                />
              )}
        </div>
      <Navbar />
    </main>
  );
};

export default TutorialCardPage;
