import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import regularRules from './assets/images/image-rules.svg'
import bonusRules from "./assets/images/image-rules-bonus.svg";
import { useState } from "react";

export type SignType =
  | "rock"
  | "scissors"
  | "paper"
  | "spock"
  | "lizard"
  | null;

export interface GameType {
  isRegular: boolean
  player: SignType;
  computer: SignType;
  result: string;
  score: number;
}

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [gameData, setGameData] = useState<GameType>({
    isRegular: true,
    player: null,
    computer: null,
    result: "",
    score: 0,
  });

  return (
    <>
      <div className="bg-gradient-to-b from-neutral-bg-from to-neutral-bg-to h-screen flex flex-col items-center md:items-stretch py-10">
        <ScoreBoard gameData={gameData} />
        <GameBoard setGameData={setGameData} gameData={gameData} />
        <div className="flex justify-end gap-5">
          <div>
            <button className="text-white font-BarlowSemi border-2 border-neutral-header-outline px-8 py-1 rounded-lg text-lg tracking-widest uppercase" onClick={() => setGameData(prev => ({...prev, isRegular: !prev.isRegular}))}>switch</button>
          </div>
          <div>
            <button
              className="md:mr-10 text-white font-BarlowSemi border-2 border-neutral-header-outline px-8 py-1 rounded-lg text-lg tracking-widest uppercase"
              onClick={() => setIsRulesOpen(true)}
            >
              rules
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isRulesOpen
            ? "absolute top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50 flex justify-center items-center"
            : "hidden"
        }`}
        onClick={() => setIsRulesOpen(false)}
      >
        <div className="md:w-[450px] md:h-[500px] w-screen h-screen bg-white p-10 rounded-lg flex flex-col justify-around items-center md:items-stretch gap-5">
          <div className="flex justify-between items-center">
            <h1 className="uppercase font-BarlowBold text-3xl text-neutral-dark-text">
              rules
            </h1>
            <button
              className="text-3xl text-slate-300 hover:text-slate-400 transition-all ease-in md:block hidden"
              onClick={() => setIsRulesOpen(false)}
            >
              X
            </button>
          </div>
          <img src={gameData.isRegular ? regularRules : bonusRules} alt="rules image" />
          <button
            className="text-3xl text-slate-300 hover:text-slate-400 transition-all ease-in md:hidden block"
            onClick={() => setIsRulesOpen(false)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
