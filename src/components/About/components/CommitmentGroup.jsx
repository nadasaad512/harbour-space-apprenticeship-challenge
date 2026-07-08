import CommitmentCard from "./CommitmentCard";

export default function CommitmentGroup({ data }) {
  return (
    <div className="flex gap-10">
      {/* بناء بيانات الدراسة */}
      <CommitmentCard 
        label="Study Commitment" 
        value={`${data?.study_commitment} hours / day`} 
        description={data?.study_commitment_text} 
      />
      
      {/* بناء بيانات العمل/التدريب */}
      <CommitmentCard 
        label="Internship Commitment" 
        value={`${data?.internship_commitment} hours / day`} 
        description={data?.internship_commitment_text} 
      />
    </div>
  );
}
