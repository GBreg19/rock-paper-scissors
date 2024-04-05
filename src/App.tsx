import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import rules from "./assets/images/image-rules-bonus.svg";
import { useState } from "react";

export type SignType =
  | "rock"
  | "scissors"
  | "paper"
  | "spock"
  | "lizard"
  | null;

export interface GameType {
  player: SignType;
  computer: SignType;
  result: string;
  score: number
}

function App() {

  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const [gameData, setGameData] = useState<GameType>({
    player: null,
    computer: null,
    result: "",
    score: 0
  });

  return (
    <>
      <div className="bg-gradient-to-b from-neutral-bg-from to-neutral-bg-to h-screen pt-14">
        <ScoreBoard score={gameData.score} />
        <GameBoard setGameData={setGameData} gameData={gameData} />
        <button
          className="mt-28 mr-10 float-right text-white font-BarlowSemi border-2 border-neutral-header-outline px-8 py-1 rounded-lg text-lg tracking-widest uppercase"
          onClick={() => setIsRulesOpen(true)}
        >
          RULES
        </button>
      </div>
      <div
        className={`${
          isRulesOpen
            ? "absolute top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50 flex justify-center items-center"
            : "hidden"
        }`}
        onClick={() => setIsRulesOpen(false)}
      >
        <div className="w-[450px] h-[500px] bg-white p-10 rounded-lg flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h1 className="uppercase font-BarlowBold text-3xl text-neutral-dark-text">
              rules
            </h1>
            <button
              className="text-3xl text-slate-300 hover:text-slate-400 transition-all ease-in"
              onClick={() => setIsRulesOpen(false)}
            >
              X
            </button>
          </div>
          <img src={rules} alt="rules image" />
        </div>
      </div>
    </>
  );
}

export default App;
