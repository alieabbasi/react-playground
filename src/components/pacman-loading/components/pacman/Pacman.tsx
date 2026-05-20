import type { FC } from "react";

import "./styles.css";
import UpperJaw from "./UpperJaw";
import LowerJaw from "./LowerJaw";


const Pacman: FC = () => {
  return (
    <div className="pacman">
      <UpperJaw className="upper-jaw" />
      <LowerJaw className="lower-jaw" />
      <div className="pacman-eye" />
    </div>
  );
};

export default Pacman;