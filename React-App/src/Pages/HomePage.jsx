import React from "react";

import HeroSection from "../HomePageComponents/HeroSection";
import OurServicesSection from "../HomePageComponents/OurServicesSection";
import WhyChooseUsSection from "../HomePageComponents/WhyChooseUsSection";
import TestimonialsSection from "../HomePageComponents/TestimonialsSection";
import FAQSection from "../HomePageComponents/FAQSection";
import ContactSection from "../HomePageComponents/ContactSection";

function HomePage() {
  return (
    <main
      className="
        flex
        flex-col
        font-barlow

        w-full
        min-w-0

        items-stretch
      "
    >
      <HeroSection />

      <OurServicesSection />

      <WhyChooseUsSection />

      <TestimonialsSection />

      <FAQSection />

      <ContactSection />
    </main>
  );
}

export default HomePage;
