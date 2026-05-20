import type { FC } from "react";
import Pacman from "./components/pacman/Pacman";

const PacmanLoading: FC = () => {
  return (
    <div className="pacman-laoding-container">
      <Pacman />
    </div>
  );
};

export default PacmanLoading;
