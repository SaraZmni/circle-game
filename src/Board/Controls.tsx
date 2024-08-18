import { FC } from "react";

interface ControlsProps {
  onUndo: () => void;
  onRedo: () => void;
}

const Controls: FC<ControlsProps> = ({ onUndo, onRedo }) => {
  return (
    <div className="controls" onClick={(e) => e.stopPropagation()}>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onRedo}>Redo</button>
      <button>Reset</button>
    </div>
  );
};
export default Controls;
