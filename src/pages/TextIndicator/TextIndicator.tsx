import React, { useEffect, useMemo, useRef, useState } from "react";

const TextWithCursor: React.FC = () => {
  const text1 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const text2 =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(1);
  const [completedParagraphs, setCompletedParagraphs] = useState<number[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  const paragraphs = useMemo(() => [text1, text2], []);
  const animationSpeed = 50; // Speed in milliseconds (adjust this value to slow down or speed up)

  useEffect(() => {
    const animateCursor = () => {
      const activeText = paragraphs[currentParagraph - 1];

      if (indicatorPosition < activeText.length) {
        setIndicatorPosition((prev) => prev + 1);
      } else {
        setCompletedParagraphs((prev) => [...prev, currentParagraph]);
        setIndicatorPosition(0);

        if (currentParagraph < paragraphs.length) {
          setCurrentParagraph((prev) => prev + 1);
        }
      }
    };

    if (!completedParagraphs.includes(currentParagraph)) {
      const timer = setTimeout(animateCursor, animationSpeed);
      return () => clearTimeout(timer);
    }
  }, [indicatorPosition, currentParagraph, completedParagraphs, paragraphs]);

  useEffect(() => {
    // Move the cursor element
    if (cursorRef.current) {
      const activeParagraph = document.getElementById(
        `paragraph-${currentParagraph}`
      );
      if (activeParagraph) {
        const span = activeParagraph.querySelector<HTMLSpanElement>(
          `span:nth-child(${indicatorPosition + 1})`
        );
        if (span) {
          const { left, top, height } = span.getBoundingClientRect();
          const parentRect = activeParagraph.getBoundingClientRect();
          console.log("boundaries", { left, top, height });
          cursorRef.current.style.left = `${left - parentRect.left + 40}px`;
          cursorRef.current.style.top = `${top - 34}px`;
          cursorRef.current.style.height = `${height}px`;
        }
      }
    }
  }, [indicatorPosition, currentParagraph]);

  const getStyledText = (
    text: string,
    currentPos: number,
    isCompleted: boolean
  ) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={
          isCompleted || index <= currentPos
            ? "duration-200 text-white font-bold"
            : "duration-200 text-gray-500 font-normal"
        }
      >
        {char}
      </span>
    ));

  // box-shadow: -4px 0px 13px 0px #FFFFFFD9;

  return (
    <div className="p-8 bg-black text-3xl relative">
      {/* Cursor Element */}
      {completedParagraphs.length < 2 && (
        <div
          ref={cursorRef}
          className="absolute w-[5px] bg-white transition-all duration-150"
          style={{
            transform: "translateY(0)",
            pointerEvents: "none",
            boxShadow: "-4px 0px 13px 0px #FFFFFFD9",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="79" viewBox="0 0 61 79" fill="none">
  <g filter="url(#filter0_df_1186_3967)">
    <path d="M55 71L6 61L6 16L55 6.00001L35 38.5L55 71Z" fill="url(#paint0_linear_1186_3967)" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_df_1186_3967" x="0" y="0" width="61" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1186_3967"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1186_3967" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_1186_3967"/>
    </filter>
    <linearGradient id="paint0_linear_1186_3967" x1="6" y1="38" x2="55" y2="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#09070F"/>
      <stop offset="1" stop-color="#08060E" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        </div>
      )}

      {/* Paragraphs */}
      <p id="paragraph-1" className="mb-4 relative">
        {getStyledText(
          text1,
          currentParagraph === 1 ? indicatorPosition : -1,
          completedParagraphs.includes(1)
        )}
      </p>
      <p id="paragraph-2" className="relative">
        {getStyledText(
          text2,
          currentParagraph === 2 ? indicatorPosition : -1,
          completedParagraphs.includes(2)
        )}
      </p>
    </div>
  );
};

export default TextWithCursor;
