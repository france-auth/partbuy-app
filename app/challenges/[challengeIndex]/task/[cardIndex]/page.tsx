"use client";

import { useParams } from "next/navigation";
import { challengequestions } from "@/data";
import DragAndDrop from "@/components/challenges/DragAndDrop";
import InputChallenge from "@/components/challenges/InputChallenge";
import Quiz from "@/components/challenges/Quiz";
import Header from "@/components/Header";

const CardDetails = () => {
  const params = useParams();
  console.log("Params:", params);

  const challengeIndex = params.challengeIndex;
  const cardIndex = params.cardIndex;

  const challengeIdx = challengeIndex ? Number(challengeIndex) : NaN;
  const cardIdx = cardIndex ? Number(cardIndex) : NaN;

  console.log("Challenge Index:", challengeIdx, "Card Index:", cardIdx);

  const challenge = challengequestions[challengeIdx];
  console.log("Challenge:", challenge);

  const tutorial = challenge?.tutorials[cardIdx];
  console.log("Tutorial:", tutorial);

  if (!challenge) {
    return <p>Challenge not found for index: {challengeIdx}</p>;
  }

  if (!tutorial) {
    return <p>Tutorial not found for card index: {cardIdx} in challenge {challengeIdx}</p>;
  }

  return (
    <div className="page">
      <Header />
      <div className="w-full mt-16">
        <div className="box mb-5">
          <p className="top-text">{tutorial.title}</p>
        </div>

        {tutorial.type === "quiz" && <Quiz data={tutorial.data} />}
        {tutorial.type === "input" && <InputChallenge data={tutorial.data} />}
        {tutorial.type === "drag-and-drop" && <DragAndDrop data={tutorial.data} />}
      </div>
    </div>
  );
};

export default CardDetails;
