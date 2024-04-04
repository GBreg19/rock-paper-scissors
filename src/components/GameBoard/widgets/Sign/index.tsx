import { SetStateAction } from "react";
import { GameType, SignType } from "../..";
import { signDataType, signsData } from "@/components/helper/SignsData";

interface Props {
  setSigns?: React.Dispatch<SetStateAction<GameType>>;
  className?: string;
  data: signDataType;
}

const Sign: React.FC<Props> = ({ setSigns, className, data }) => {
  const { title, border, position, img } = data;

  const onSignClickHandler = () => {
    if (!setSigns) return;
    setSigns((prev) => ({ ...prev, player: title as SignType }));

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      const computerSign = signsData.find(
        (sign) => sign.id === randomNumber
      )?.title;
      setSigns((prev) => ({ ...prev, computer: computerSign as SignType }));
    }, 1000);
  };

  return (
    <button
      onClick={onSignClickHandler}
      className={` ${border} rounded-full flex justify-center items-center bg-white  ${
        className
          ? className
          : `absolute ${position} w-40 h-40 border-[20px] shadow-insideSm`
      } `}
    >
      <img src={img} className={`${className ? "w-24" : ""}`} />
    </button>
  );
};

export default Sign;
