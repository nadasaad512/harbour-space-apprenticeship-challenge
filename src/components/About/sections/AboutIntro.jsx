import ProfileImage from "../components/ProfileImage";

export default function AboutIntro({ data }) {
  const title = data?.name; 
  
  const description = data?.about?.[0]?.data; 

  const photo = data?.program?.program_logo;

  return (
    <section className="bg-white px-12 py-20">
      <div className="mx-auto flex max-w-7xl items-center gap-[119px]">

        <ProfileImage photo={photo} />

        <div>
          <h2 className="w-[479px] text-[48px] font-medium leading-[56px] text-purple-600">
            {title}
          </h2>

          <p className="mt-10 w-[479px] text-[22px] font-light leading-[32px] text-[#535353]">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}
