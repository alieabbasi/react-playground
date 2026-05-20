import type { FC } from "react";

import "./styles.css";
import UpperJaw from "./components/UpperJaw";
import LowerJaw from "./components/LowerJaw";

const PacmanLoading: FC = () => {
  return (
    <div className="pacman">
      <UpperJaw className="upper-jaw" />
      <LowerJaw className="lower-jaw" />
      <div className="pacman-eye" />
    </div>
  );
};

export default PacmanLoading;
