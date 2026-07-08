export default function CompanyInfo({ scholarshipData }) {
  return (
    <div className="flex items-center gap-6">
      <img
        src="/red_logo.svg"
        alt={scholarshipData.organization_name}
        className="h-20 w-20"
      />

      <div>
        <p className="text-[18px] font-light text-black/50">
          Powered by:
        </p>

        <p className="mt-[10px] text-[27px] font-light text-black">
          {scholarshipData.organization_name}
        </p>
      </div>
    </div>
  );
}