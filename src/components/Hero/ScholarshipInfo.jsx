import CompanyInfo from "./CompanyInfo";
import ApplicationDeadline from "./ApplicationDeadline";
import InfoCard from "./InfoCard";

export default function ScholarshipInfo({ data }) {
  return (
    <div className="relative">
      <img
        src="/BG_Gride.svg"
        alt=""
        className="pointer-events-none absolute left-[80px] top-[245px] h-[257px] w-[560px]"
      />

      <div className="relative z-10">
        <CompanyInfo scholarshipData={data.scholarship_info} />
        <ApplicationDeadline deadline={data.application_deadline} />
        <InfoCard scholarshipData={data.scholarship_info} />
      </div>
    </div>
  );
}