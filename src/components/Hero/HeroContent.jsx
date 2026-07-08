export default function HeroContent({ data }) {
  return (
    <div className="relative">
      <img
        src="/circle.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] left-[220px] h-[206px] w-[206px] -rotate-[20deg] opacity-20"
      />

      <h1 className="relative w-[440px] text-[48px] font-medium leading-[56px] tracking-[-0.6px] text-purple-600">
        {data.program_title}
      </h1>

      <p className="mt-12 w-[440px] text-[22px] font-medium leading-[32px] tracking-[-0.33px] text-[#535353]">
        {data.program_description}
      </p>

      <p className="mt-10 w-[440px] text-[22px] font-light leading-[32px] tracking-[-0.33px] text-[#535353]">
        {data.long_description}
      </p>

      <p className="mt-10 w-[438px] text-[22px] leading-[32px] tracking-[-0.33px] text-[#535353]">
        <span className="font-medium">Position:</span>{" "}
        <span className="font-light">{data.position}</span>
      </p>

      <button className="mt-12 h-[58px] w-[166px] rounded-full bg-purple-600 text-[18px] font-medium text-white hover:bg-purple-700">
        Apply Now
      </button>
    </div>
  );
}