import ScholarshipCard from "../components/ScholarshipCard";
import CommitmentGroup from "../components/CommitmentGroup";
import GraduationDivider from "../components/GraduationDivider";
import ContractCard from "../components/ContractCard";

export default function ProgramDetails({ data }) {
  return (
    <section className="bg-white px-12 py-20">
      <div className="mx-auto flex max-w-7xl items-start gap-10">

        <ScholarshipCard data={data} />

        <div className="flex flex-col">
          <CommitmentGroup data={data} />

          <GraduationDivider />

          <ContractCard data={data} />
        </div>

      </div>
    </section>
  );
}
