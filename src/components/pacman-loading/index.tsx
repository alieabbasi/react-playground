import type { FC } from "react";

import "./styles.css";
import UpperJaw from "./components/UpperJaw";
import LowerJaw from "./components/LowerJaw";
 
const PacmanLoading: FC = () => {
  return ( 
    <div className="jaws">
      <UpperJaw className="upper-jaw" />
      <LowerJaw className="lower-jaw" />
    </div>
   );
}
 
export default PacmanLoading;