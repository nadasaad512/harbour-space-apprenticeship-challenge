export default function CommitmentCard({ label, value, description }) {
  return (
    <div className="flex h-[274px] w-[320px] flex-col rounded border border-[#DADADA] bg-white p-6">

      <p className="text-purple-600">{label}</p>

      <p className="mt-2 text-[26px] font-light">{value}</p>

      <div className="mt-5 w-7 border-t border-gray-300" />

      <p className="mt-4 text-[#535353]">{description}</p>

    </div>
  );
}