import { SetStateAction, useEffect, useState } from "react";
import { signsData } from "../helper/SignsData";
import Sign from "./widgets/Sign";

interface Props {
  setScore: React.Dispatch<SetStateAction<number>>;
}

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
}

const GameBoard: React.FC<Props> = ({ setScore }) => {
  const [signs, setSigns] = useState<GameType>({
    player: null,
    computer: null,
  });

  const playerSign = signsData.find((sign) => sign.title === signs.player);
  const computerSign = signsData.find((sign) => sign.title === signs.computer);

  const determineWinner = () => {
    const { player, computer } = signs;
    if (player === "scissors" && computer === "paper") {
      setScore((prev) => (prev += 1));
    } else if(player === 'paper' && computer === 'scissors'){
      setScore((prev) => prev -= 1)
    }
    // if()
  };

  useEffect(() => {
    determineWinner()
  }, [signs.computer])

  return (
    <div
      className={`h-[370px] m-auto mt-40 relative ${
        signs.player === null
          ? "w-[370px]"
          : "w-full flex justify-center gap-20"
      } `}
    >
      {signs.player === null ? (
        <div className="w-full h-full bg-pentagon bg-no-repeat bg-center bg-contain">
          {signsData.map((sign) => {
            const { id } = sign;
            return <Sign key={id} setSigns={setSigns} data={sign} />;
          })}
        </div>
      ) : (
        <div className="flex gap-20">
          <div className="flex flex-col justify-between items-center gap-14">
            <h1 className="text-2xl text-white font-BarlowBold uppercase tracking-widest">
              you picked
            </h1>
            {playerSign ? (
              <Sign
                data={playerSign}
                className="w-72 h-72 border-[35px] shadow-insideLg"
              />
            ) : null}
          </div>
          {signs.player !== null && signs.computer !== null && (
            <div className="flex flex-col gap-5 justify-center">
              <p className="uppercase text-white text-5xl font-BarlowBold tracking-wider">
                you lose
              </p>
              <button
                onClick={() =>
                  setSigns((prev) => ({
                    ...prev,
                    player: null,
                    computer: null,
                  }))
                }
                className="uppercase text-black bg-white w-full py-2 font-BarlowSemi tracking-widest rounded-lg text-lg"
              >
                play again
              </button>
            </div>
          )}
          <div className="flex flex-col justify-between items-center gap-14">
            <h1 className="text-2xl text-white font-BarlowBold uppercase tracking-widest">
              the house picked
            </h1>
            {computerSign ? (
              <Sign
                data={computerSign}
                className="w-72 h-72 border-[35px] shadow-insideLg"
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
