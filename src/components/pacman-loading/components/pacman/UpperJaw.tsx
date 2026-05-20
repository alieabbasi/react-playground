import type { FC, SVGProps } from "react";

interface UpperJawProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const UpperJaw: FC<UpperJawProps> = (props) => {
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
        d="M46 25C48.2091 25 50.0327 23.1978 49.6808 21.0168C48.8489 15.8626 46.4166 11.0613 42.6777 7.32233C37.9893 2.63392 31.6304 5.00582e-07 25 0C18.3696 -5.00582e-07 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 1.00116e-06 18.3696 0 25L25 25H46Z"
        fill="#EEC407"
      />
    </svg>
  );
};

export default UpperJaw;
