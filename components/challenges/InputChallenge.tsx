interface InputChallengeData {
  prompt: string; // Define the type for the prompt
}

interface InputChallengeProps {
  data: InputChallengeData;
}

const InputChallenge: React.FC<InputChallengeProps> = ({ data }) => {
  return (
    <div className="box">
      <p>{data.prompt}</p>
      <input type="text" placeholder="Type your answer here" />
    </div>
  );
};

export default InputChallenge;
