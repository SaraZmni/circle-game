import { FC, useState } from "react";

interface Circle {
  x: number;
  y: number;
}

const Board: FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const handleClick = (e: MouseEvent) => {
    setCircles((prevState: Circle[]) => {
      return [
        ...prevState,
        {
          x: e.clientX,
          y: e.clientY,
        },
      ];
    });
  };
  return <div className="board">Board Game</div>;
};
export default Board;
