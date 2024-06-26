import spockIcon from "@/assets/icons/icon-spock.svg";
import paperIcon from "@/assets/icons/icon-paper.svg";
import lizardIcon from "@/assets/icons/icon-lizard.svg";
import rockIcon from "@/assets/icons/icon-rock.svg";
import scissorsIcon from "@/assets/icons/icon-scissors.svg";

export interface signDataType {
  id: number;
  title: string;
  img: string;
  positionRegular?: string,
  positionBonus: string;
  border: string;
}

export const signsData = [
  {
    id: 1,
    title: "scissors",
    img: scissorsIcon,
    positionRegular: 'md:-top-8 -top-5 md:-right-8 -right-5',
    positionBonus: "md:-top-20 -top-10 left-1/2 -translate-x-1/2",
    border:
      "border-primary-scissors-gradient-from to-primary-scissors-gradient-to",
  },
  {
    id: 2,
    title: "paper",
    img: paperIcon,
    positionRegular: 'md:-top-8 -top-5 md:-left-8 -left-5',
    positionBonus: "md:top-20 top-12 md:-right-20 -right-10",
    border: "border-primary-paper-gradient-from to-primary-paper-gradient-to",
  },
  {
    id: 3,
    title: "rock",
    img: rockIcon,
    positionRegular: 'md:bottom-10 bottom-5 left-1/2 -translate-x-1/2',
    positionBonus: "md:-bottom-20 -bottom-10 right-0",
    border: "border-primary-rock-gradient-from to-primary-rock-gradient-to",
  },
  {
    id: 4,
    title: "lizard",
    img: lizardIcon,
    positionBonus: "md:-bottom-20 -bottom-10 left-0",
    border: "border-primary-lizard-gradient-from to-primary-lizard-gradient-to",
  },
  {
    id: 5,
    title: "spock",
    img: spockIcon,
    positionBonus: "md:top-20 top-12 md:-left-20 -left-10",
    border: "border-primary-cyan-gradient-from to-primary-cyan-gradient-to ",
  },
];
