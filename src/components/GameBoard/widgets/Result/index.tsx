import { GameType } from "@/App";
import { SetStateAction } from "react";

interface Props {
  setGameData: React.Dispatch<SetStateAction<GameType>>;
  gameData: GameType;
  className?: string;
}
const Result: React.FC<Props> = ({ setGameData, gameData, className }) => {
  return (
    gameData.player !== null &&
    gameData.computer !== null && (
      <div className={`flex flex-col justify-center z-50 ${className ?className : ''}`}>
        <p className="uppercase text-white text-5xl mb-5 font-BarlowBold tracking-wider">
          {gameData.result}
        </p>
        <button
          onClick={() =>
            setGameData((prev) => ({
              ...prev,
              player: null,
              computer: null,
              result: "",
            }))
          }
          className="uppercase text-black bg-white w-full py-2 font-BarlowSemi tracking-widest rounded-lg text-lg"
        >
          play again
        </button>
      </div>
    )
  );
};

export default Result;
