export default function ApplicationDeadline({ deadline }) {
  return (
    <div className="mt-8 w-[480px] rounded border border-[#DADADA] bg-white p-6">
      <p className="text-[16px] font-medium text-purple-600">
        Application closes in
      </p>

      <p className="mt-[18px] text-[27px] font-light text-[#535353]">
        {deadline.days} Day : {deadline.hours} Hrs : {deadline.minutes} Min : {deadline.seconds} Sec
      </p>
    </div>
  );
}