import AboutIntro from "./sections/AboutIntro";
import ProgramDetails from "./sections/ProgramDetails";

export default function About({ data }) {
  return (
    <>
      <AboutIntro data={data} />
      <ProgramDetails data={data} />
    </>
  );
}