export default function GraduationDivider({ label }) {
  return (
    <div className="my-6 flex items-center gap-6">

      <div className="h-px w-[265px] bg-gray-300" />

      <p className="w-[95px] text-center text-[#535353]">
        {label || "GRADUATION"}
      </p>

      <div className="h-px w-[265px] bg-gray-300" />

    </div>
  );
}