import { useState, useRef, useEffect } from "react";

export default function FilterDropdown({
  options,
  value,
  onChange,
  label = "Program Conditions",
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-5">
      {/* Filter Label */}
      <span className="text-[#8A8A8A] text-[16px] font-medium">
        Filter by:
      </span>

      {/* Dropdown */}
      <div ref={wrapperRef} className="relative w-[250px]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-[58px] bg-white border border-[#E6E6E6] rounded-[24px]
          px-6 flex items-center justify-between shadow-sm transition-all duration-200"
        >
          <span className="text-[#685DC5] font-semibold text-[18px]">
            {label}
          </span>

          <svg
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#685DC5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div
            className="absolute left-0 top-[66px] w-full bg-white
            rounded-[24px] border border-[#E6E6E6]
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            py-3 z-50"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full text-left px-6 py-2.5 transition-colors duration-200
                hover:bg-[#F8F8F8]
                ${
                  option === value
                    ? "text-[#685DC5] font-medium"
                    : "text-[#666666]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}