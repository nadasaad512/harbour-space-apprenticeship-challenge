export default function InfoItem({ label, value, secondValue }) {
  return (
    <div>
      <p className="text-[16px] font-medium leading-6 tracking-[-0.16px] text-purple-600">
        {label}
      </p>

      <p className="mt-1 text-[16px] font-light leading-6 tracking-[-0.16px] text-[#535353]">
        {value}
        {secondValue && (
          <>
            <br />
            {secondValue}
          </>
        )}
      </p>
    </div>
  );
}