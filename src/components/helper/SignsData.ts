import spockIcon from "@/assets/icons/icon-spock.svg";
import paperIcon from "@/assets/icons/icon-paper.svg";
import lizardIcon from "@/assets/icons/icon-lizard.svg";
import rockIcon from "@/assets/icons/icon-rock.svg";
import scissorsIcon from "@/assets/icons/icon-scissors.svg";

export interface signDataType {
  id: number;
  title: string;
  img: string;
  position: string;
  border: string;
}

export const signsData = [
  {
    id: 1,
    title: "scissors",
    img: scissorsIcon,
    position: "-top-20 left-1/2 -translate-x-1/2",
    border:
      "border-primary-scissors-gradient-from to-primary-scissors-gradient-to",
  },
  {
    id: 2,
    title: "paper",
    img: paperIcon,
    position: "top-20 -right-20",
    border: "border-primary-paper-gradient-from to-primary-paper-gradient-to",
  },
  {
    id: 3,
    title: "rock",
    img: rockIcon,
    position: "-bottom-20 right-0",
    border: "border-primary-rock-gradient-from to-primary-rock-gradient-to",
  },
  {
    id: 4,
    title: "lizard",
    img: lizardIcon,
    position: "-bottom-20 left-0",
    border: "border-primary-lizard-gradient-from to-primary-lizard-gradient-to",
  },
  {
    id: 5,
    title: "spock",
    img: spockIcon,
    position: "top-20 -left-20",
    border: "border-primary-cyan-gradient-from to-primary-cyan-gradient-to ",
  },
];
