'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import { tutorials } from '@/data'; // Ensure `tutorials` is properly typed

const TutorialCardPage = () => {
  const params = useParams();
  const tutorialIndex = params.tutorialIndex;
  const cardIndex = params.cardIndex;

  // Convert query parameters to numbers safely
  const tutorialIdx = tutorialIndex ? Number(tutorialIndex) : NaN;
  const cardIdx = cardIndex ? Number(cardIndex) : NaN;

  // Check if indices are valid numbers
  if (isNaN(tutorialIdx) || isNaN(cardIdx) || tutorialIdx <= 0 || cardIdx <= 0) {
    return <p className="text-center">Invalid tutorial or card index.</p>;
  }

  // Find the tutorial data dynamically using the converted index
  const tutorial = tutorials[tutorialIdx - 1]; // Tutorials are 1-based

  if (!tutorial) {
    return <p className="text-center">Tutorial not found.</p>;
  }

  return (
    <main className="page">
      <Header tutorialIndex={tutorialIdx} cardIndex={cardIdx} />
      <div className="box">
        <h1 className="roboto font-bold text-xl">Tutorial {tutorialIdx}</h1>
        <h2 className="roboto font-medium text-lg">Card {cardIdx}</h2>
      </div>
    </main>
  );
};

export default TutorialCardPage;
