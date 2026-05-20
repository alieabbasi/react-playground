import type { FC, SVGProps } from "react";

interface LowerJawProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const LowerJaw: FC<LowerJawProps> = (props) => {
  return (
    <svg
      width="50"
      height="25"
      viewBox="0 0 50 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M46.2264 0C48.3105 0 50.0292 1.69902 49.7158 3.75942C48.919 8.99834 46.4707 13.8847 42.6777 17.6777C37.9893 22.3661 31.6304 25 25 25C18.3696 25 12.0107 22.3661 7.32233 17.6777C2.63392 12.9893 1.00116e-06 6.63042 0 3.59877e-06L25 0H46.2264Z"
        fill="#EEC407"
      />
    </svg>
  );
};

export default LowerJaw;
