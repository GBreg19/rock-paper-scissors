import desktopLogo from "@/assets/icons/logo-bonus.svg";

interface Props {
  score: number;
}

const ScoreBoard: React.FC<Props> = ({ score }) => {
  return (
    <div className="flex justify-between px-5 py-4 border-2 border-neutral-header-outline rounded-lg md:w-1/2 w-10/12 mx-auto">
      <div>
        <img src={desktopLogo} alt="logo icon" className="md:w-auto w-20" />
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
