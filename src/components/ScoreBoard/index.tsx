import desktopLogo from "@/assets/icons/logo-bonus.svg";

interface Props {
  score: number;
}

const ScoreBoard: React.FC<Props> = ({ score }) => {
  return (
    <div className="flex justify-between px-5 py-4 border-2 border-neutral-header-outline rounded-lg w-2/4 m-auto">
      <div>
        <img src={desktopLogo} alt="logo icon" />
      </div>
      <div className="bg-white px-14 py-3 flex flex-col items-center rounded-lg">
        <p className="uppercase font-BarlowSemi text-neutral-score-text tracking-widest">
          score
        </p>
        <p className="text-6xl font-BarlowBold text-neutral-dark-text">
          {score}
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
