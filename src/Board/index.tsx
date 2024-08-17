import { FC, useState, MouseEvent } from "react";
import { COLORS } from "../constants";
import Circles from "./Circles";
import { CircleFullType } from "./types";

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const Board: FC = () => {
  const [circles, setCircles] = useState<CircleFullType[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setCircles((prevState: CircleFullType[]) => {
      return [
        ...prevState,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          bgColor: getRandomColor(),
        },
      ];
    });
  };
  return (
    <div className="board" onClick={handleClick}>
      <Circles circles={circles} />
    </div>
  );
};
export default Board;
