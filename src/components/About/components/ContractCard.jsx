export default function ContractCard({ data }) {
  return (
    <div className="flex h-[178px] w-[680px] flex-col rounded border border-[#DADADA] bg-white p-8">
      <p className="text-purple-600">Degree</p>
      <p className="mt-2 text-[26px] font-light">{data?.degree}</p>
      <div className="mt-5 w-7 border-t border-gray-300" />
      <p className="mt-4 text-[#535353]">{data?.duration} Year Full-Time</p>
    </div>
  );
}
