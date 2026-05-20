import type { FC } from "react";
import Pacman from "./components/pacman/Pacman";

import "./styles.css";

const PacmanLoading: FC = () => {
  return (
    <div className="pacman-loading-container">
      <Pacman />
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
      <div className="dot dot-4"></div>
      <div className="dot dot-5"></div>
      <div className="dot dot-6"></div>
      <div className="dot dot-7"></div>
    </div>
  );
};

export default PacmanLoading;
