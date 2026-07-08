import { useState } from "react";
import FaqItem from "./FaqItem";
import FilterDropdown from "./FilterDropdown";

export default function FAQ({ data }) {
  const allFaqs = data?.scholarship?.faqs?.items || [];

  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(allFaqs.map((item) => item.type))];

  const filteredFaqs =
    filter === "All"
      ? allFaqs
      : allFaqs.filter((item) => item.type === filter);

  return (
    <section className="bg-white px-12 py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center gap-6 flex-wrap mb-8">
          <h2 className="font-['Apercu_Pro',sans-serif] font-bold text-[34px] leading-10 tracking-[-0.4px] text-[#685DC5] m-0 max-w-[300px]">
            Frequently asked
            <br />
            questions
          </h2>

          <div className="flex items-center gap-2.5">
       

            <FilterDropdown
              options={categories}
              value={filter}
              onChange={setFilter}
            />
          </div>
        </div>

        {/* Divider under header */}
        <div className="border-t border-[#EDEDED] mb-2" />

        {/* FAQ List */}
        <div>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                category={faq.type}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))
          ) : (
            <p className="text-[#959595] font-['Apercu_Pro',sans-serif] text-lg">
              No FAQs available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}