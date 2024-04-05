import { GameType } from "@/App";
import { SetStateAction, useEffect } from "react";
import { signsData } from "../helper/SignsData";

interface Props {
  setGameData: React.Dispatch<SetStateAction<GameType>>;
  gameData: GameType;
}

const useGameBoard = ({ gameData, setGameData }: Props) => {
  const playerSign = signsData.find((sign) => sign.title === gameData.player);
  const computerSign = signsData.find(
    (sign) => sign.title === gameData.computer
  );

  const determineWinner = () => {
    const { player, computer } = gameData;
    if (
      (player === "scissors" &&
        (computer === "paper" || computer === "lizard")) ||
      (player === "paper" && (computer === "rock" || computer === "spock")) ||
      (player === "rock" &&
        (computer === "lizard" || computer === "scissors")) ||
      (player === "lizard" && (computer === "spock" || computer === "paper")) ||
      (player === "spock" && (computer === "rock" || computer === "scissors"))
    ) {
      setGameData((prev) => ({
        ...prev,
        result: "you win",
        score: prev.score + 1,
      }));
    } else if (
      (player === "paper" &&
        (computer === "scissors" || computer === "lizard")) ||
      (player === "rock" && (computer === "paper" || computer === "spock")) ||
      (player === "scissors" &&
        (computer === "rock" || computer === "spock")) ||
      (player === "lizard" &&
        (computer === "rock" || computer === "scissors")) ||
      (player === "spock" && (computer === "paper" || computer === "lizard"))
    ) {
      setGameData((prev) => ({
        ...prev,
        result: "you lose",
        score: prev.score - 1,
      }));
    } else {
      setGameData((prev) => ({ ...prev, result: "It's a tie" }));
    }
  };

  useEffect(() => {
    determineWinner();
  }, [gameData.computer]);

  return { playerSign, computerSign };
};

export default useGameBoard;
