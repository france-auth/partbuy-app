interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  data: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  return (
    <div className="box">
      {data.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map((option, i) => (
            <button key={i}>{option}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
