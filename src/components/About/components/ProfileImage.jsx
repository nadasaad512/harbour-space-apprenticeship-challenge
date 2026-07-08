export default function ProfileImage({ photo }) {
  const SIZE = 438;
  const IMG = 380;
  const OFFSET = (SIZE - IMG) / 2;

  // استخدام رابط الصورة من البيانات (program_logo)
  const imageUrl = photo; 

  return (
    <div className="relative flex-shrink-0" style={{ width: SIZE, height: SIZE }}>
      <img src="/BG_Profile.svg" alt="" className="absolute h-full w-full" />
      {imageUrl && (
        <img
           src="/person.svg"
          alt="Scholarship Logo"
          className="absolute rounded-full object-cover"
          style={{
            width: IMG,
            height: IMG,
            top: OFFSET,
            left: OFFSET,
          }}
        />
      )}
    </div>
  );
}
