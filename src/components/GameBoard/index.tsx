import { SetStateAction } from "react";
import { signsData } from "../helper/SignsData";
import Sign from "./widgets/Sign";
import { GameType } from "@/App";
import useGameBoard from "./GameBoard.hooks";
import { Result } from "./widgets";

interface Props {
  setGameData: React.Dispatch<SetStateAction<GameType>>;
  gameData: GameType;
}

const GameBoard: React.FC<Props> = ({ setGameData, gameData }) => {
  const { playerSign, computerSign } = useGameBoard({ setGameData, gameData });
  const data =  gameData.isRegular ? signsData.slice(0,3) : signsData

  return (
    <div
      className={`md:h-[370px] h-[220px] m-auto relative mb-48 md:mb-32 ${
        gameData.player === null
          ? "md:w-[370px] w-[220px]"
          : "w-full flex justify-center gap-20"
      } `}
    >
      {gameData.player === null ? (
        <div
          className={`w-full h-full bg-no-repeat bg-center bg-contain ${
            gameData.isRegular ? "bg-triangle w-[80%] h-[80%] m-auto" : "bg-pentagon"
          }`}
        >
          {data.map((sign) => {
            const { id } = sign;
            return <Sign key={id} setGameData={setGameData} gameData={gameData} data={sign} />;
          })}
        </div>
      ) : (
        <div className="flex md:flex-row flex-col gap-20">
          <div className="flex justify-between items-center md:gap-20 gap-16">
            <div className="flex md:flex-col flex-col-reverse  justify-between items-center md:gap-14 gap-7">
              <h1 className="md:text-2xl tex-lg text-white font-BarlowBold uppercase tracking-widest z-50">
                you picked
              </h1>
              {playerSign ? (
                <Sign
                  data={playerSign}
                  className="md:w-72 md:h-72 md:border-[35px] w-32 h-32 border-[20px] md:shadow-insideLg shadow-insideSm outline-none"
                  winner={gameData.result === "you win"}
                />
              ) : null}
            </div>
            <Result
              gameData={gameData}
              setGameData={setGameData}
              className="md:block hidden"
            />
            <div className="flex md:flex-col flex-col-reverse  justify-between items-center md:gap-14 gap-7">
              <h1 className="md:text-2xl tex-lg text-white font-BarlowBold uppercase tracking-widest z-50 justify-start">
                the house picked
              </h1>
              {computerSign ? (
                <Sign
                  data={computerSign}
                  className="md:w-72 md:h-72 md:border-[35px] w-32 h-32 border-[20px] md:shadow-insideLg shadow-insideSm outline-none"
                  winner={gameData.result === "you lose"}
                />
              ) : (
                <div className="md:w-72 md:h-72 w-32 h-32 rounded-full bg-black opacity-15"></div>
              )}
            </div>
          </div>
          <Result
            gameData={gameData}
            setGameData={setGameData}
            className="md:hidden block w-2/3 m-auto text-center"
          />
        </div>
      )}
    </div>
  );
};

export default GameBoard;
