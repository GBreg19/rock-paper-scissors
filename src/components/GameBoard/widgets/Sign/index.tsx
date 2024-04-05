import { SetStateAction } from "react";
import { signDataType, signsData } from "@/components/helper/SignsData";
import { GameType, SignType } from "@/App";

interface Props {
  setGameData?: React.Dispatch<SetStateAction<GameType>>;
  className?: string;
  data: signDataType;
  winner?: boolean;
}

const Sign: React.FC<Props> = ({ setGameData, className, data, winner }) => {
  const { title, border, position, img } = data;

  const onSignClickHandler = () => {
    if (!setGameData) return;
    setGameData((prev) => ({ ...prev, player: title as SignType }));

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      const computerSign = signsData.find(
        (sign) => sign.id === randomNumber
      )?.title;
      setGameData((prev) => ({ ...prev, computer: computerSign as SignType }));
    }, 1000);
  };

  return (
    <div className={`${winner ? "md:shadow-winnerLg shadow-winnerSm rounded-full" : "z-50"}`}>
      <button
        type="button"
        onClick={onSignClickHandler}
        className={` ${border} rounded-full flex justify-center items-center bg-white  ${
          className
            ? className
            : `absolute ${position} md:w-40 md:h-40 w-24 h-24 md:border-[20px] border-[12px] shadow-insideSm`
        } `}
      >
        <img
          src={img}
          alt="sign icon"
          className={`${className ? "md:w-24 w-10" : "md:w-auto w-9"}`}
        />
      </button>
    </div>
  );
};

export default Sign;
