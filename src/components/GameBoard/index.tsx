import { SetStateAction } from "react";
import { signsData } from "../helper/SignsData";
import Sign from "./widgets/Sign";
import { GameType } from "@/App";
import useGameBoard from "./GameBoard.hooks";

interface Props {
  setGameData: React.Dispatch<SetStateAction<GameType>>;
  gameData: GameType;
}

const GameBoard: React.FC<Props> = ({ setGameData, gameData }) => {
  const { playerSign, computerSign } = useGameBoard({ setGameData, gameData });

  return (
    <div
      className={`h-[370px] m-auto mt-40 relative ${
        gameData.player === null
          ? "w-[370px]"
          : "w-full flex justify-center gap-20"
      } `}
    >
      {gameData.player === null ? (
        <div className="w-full h-full bg-pentagon bg-no-repeat bg-center bg-contain">
          {signsData.map((sign) => {
            const { id } = sign;
            return <Sign key={id} setGameData={setGameData} data={sign} />;
          })}
        </div>
      ) : (
        <div className="flex gap-20">
          <div className="flex flex-col justify-between items-center gap-14">
            <h1 className="text-2xl text-white font-BarlowBold uppercase tracking-widest z-50">
              you picked
            </h1>
            {playerSign ? (
              <Sign
                data={playerSign}
                className="w-72 h-72 border-[35px] shadow-insideLg"
                winner={gameData.result === 'you win'}
              />
            ) : null}
          </div>
          {gameData.player !== null && gameData.computer !== null && (
            <div className="flex flex-col gap-5 justify-center z-50">
              <p className="uppercase text-white text-5xl font-BarlowBold tracking-wider">
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
          )}
          <div className="flex flex-col justify-between items-center gap-14">
            <h1 className="text-2xl text-white font-BarlowBold uppercase tracking-widest z-50">
              the house picked
            </h1>
            {computerSign ? (
              <Sign
                data={computerSign}
                className="w-72 h-72 border-[35px] shadow-insideLg"
                winner={gameData.result === 'you lose'}
              />
            ) : (
              <div className="w-52 h-52 rounded-full bg-black opacity-15 mb-10"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
