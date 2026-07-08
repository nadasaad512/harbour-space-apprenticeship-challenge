import { useState, useRef, useEffect } from "react";

function getAnswerText(answer) {
  if (!answer) return "";

  if (typeof answer === "string") return answer;

  if (Array.isArray(answer)) {
    return answer
      .map((item) => {
        if (typeof item === "string") return item;
        if (item?.data) {
          return typeof item.data === "string"
            ? item.data
            : JSON.stringify(item.data);
        }
        return "";
      })
      .join("\n\n");
  }

  if (typeof answer === "object") {
    if (answer.data) {
      return typeof answer.data === "string"
        ? answer.data
        : JSON.stringify(answer.data);
    }
    return JSON.stringify(answer);
  }

  return "";
}

function PlusMinusToggle({ isOpen }) {
  const [filled, setFilled] = useState(isOpen);

  const size = 42;
  const r = 19;
  const circumference = 2 * Math.PI * r;
  const SWEEP_MS = 350;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setFilled(true), SWEEP_MS);
      return () => clearTimeout(timer);
    }
    setFilled(false);
  }, [isOpen]);

  const markColor = filled ? "#FFFFFF" : isOpen ? "#685DC5" : "#8F8F8F";

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Border Circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#DCDCDC"
          fill="none"
        />
      </svg>

      {/* Animated Stroke */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#685DC5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isOpen ? 0 : circumference}
          style={{
            transition: `stroke-dashoffset ${SWEEP_MS}ms cubic-bezier(.65,0,.35,1)`,
          }}
        />
      </svg>

      {/* Filled Circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`absolute inset-0 transition-all duration-200 ${
          filled ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="#685DC5"
        />
      </svg>

      {/* Minus */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
      >
        <path
          d={`M${size * 0.33} ${size / 2}H${size * 0.67}`}
          stroke={markColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Plus Vertical */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`absolute inset-0 transition-opacity duration-200 ${
          filled ? "opacity-0" : "opacity-100"
        }`}
      >
        <path
          d={`M${size / 2} ${size * 0.33}V${size * 0.67}`}
          stroke={markColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function FaqItem({
  category,
  question,
  answer,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [open, answer]);

  return (
    <div className="border-b border-[#F1F1F1]">
      <div className="flex items-start gap-20 py-8">
        {/* Category */}
        <div className="w-[220px] shrink-0 pt-1">
          <span className="font-['Apercu_Pro',sans-serif] text-[#685DC5] text-[18px] font-semibold leading-7">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-start justify-between gap-8 text-left bg-transparent border-none cursor-pointer p-0"
          >
            <div className="font-['Apercu_Pro',sans-serif] text-[#3F3F3F] text-[24px] font-semibold leading-8">
              {question}
            </div>

            <PlusMinusToggle isOpen={open} />
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: open ? `${height}px` : "0px",
              opacity: open ? 1 : 0,
            }}
          >
            <div
              ref={answerRef}
              className="pt-8 font-['Apercu_Pro',sans-serif] text-[#666666] text-[17px] leading-9 font-normal whitespace-pre-line max-w-[620px]"
            >
              {getAnswerText(answer)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}