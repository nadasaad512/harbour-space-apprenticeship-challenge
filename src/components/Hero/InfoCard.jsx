import InfoItem from "./InfoItem";

export default function InfoCard({ scholarshipData }) {
  return (
    <div className="mt-6 grid h-[200px] w-[480px] grid-cols-2 gap-x-6 gap-y-8 rounded border border-[#DADADA] bg-white p-6">
      <InfoItem label="Location" value={scholarshipData.location} />
      <InfoItem label="Duration" value={scholarshipData.duration} secondValue={scholarshipData.type} />
      <InfoItem label="Start date" value={scholarshipData.start_date} />
      <InfoItem label="End date" value={scholarshipData.end_date} />
    </div>
  );
}