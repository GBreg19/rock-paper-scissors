import { GameType } from "@/App";
import bonusLogo from "@/assets/icons/logo-bonus.svg";
import regularLogo from "@/assets/icons/logo.svg";

interface Props {
  gameData: GameType;
}

const ScoreBoard: React.FC<Props> = ({ gameData }) => {
  const { score, isRegular } = gameData;
  return (
    <div className="flex justify-between px-5 py-4 border-2 border-neutral-header-outline rounded-lg md:w-1/2 w-10/12 mx-auto">
      <div>
        <img
          src={isRegular ? regularLogo : bonusLogo}
          alt="logo icon"
          className={`${isRegular ? 'md:w-44 w-28' : 'md:w-28 w-20'}`}
        />
      </div>
      <div className="bg-white md:px-12 px-6 md:py-3 py-2 flex flex-col items-center rounded-lg">
        <p className="uppercase font-BarlowSemi text-neutral-score-text md:text-lg text-sm tracking-widest">
          score
        </p>
        <p className="text-4xl md:text-6xl font-BarlowBold text-neutral-dark-text">
          {score}
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
