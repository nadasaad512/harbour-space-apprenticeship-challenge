export default function ScholarshipCard({ data }) {
  return (
    <div className="flex h-[524px] w-[320px] flex-col rounded border border-[#DADADA] bg-white p-8">
      <p className="text-purple-600">Scholarship Value</p>
      {/* نستخدم total_value من البيانات */}
      <p className="mt-6 text-[48px] font-light">€{data?.total_value?.toLocaleString()}</p>

      <div className="flex-1" />
      <div className="border-t border-gray-300" />

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-purple-600">Tuition</p>
          <p>€{data?.tuition?.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-purple-600">Remaining</p>
          <p>€{data?.remaining?.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-purple-600">Living stipend</p>
        <p>€{data?.stipend_per_month?.toLocaleString()} / month</p>
      </div>
    </div>
  );
}
