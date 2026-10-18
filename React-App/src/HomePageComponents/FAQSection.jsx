import React from "react";

import BannerSection from "../Sections/BannerSection";
import AccordionSection from "../Sections/AccordionSection";

import continerBg from "../HomePageComponents/assets/Container.png";

function FAQSection() {
  return (
    <section className="relative w-full bg-[#101010]">
      <BannerSection
        image={continerBg}
        title="Frequently Asked Questions"
        Desc="Everything you need to know about our services, process, and the way we work."
        animation="faq"
        highlightText="Questions"
      />

      <AccordionSection />
    </section>
  );
}

export default FAQSection;
