import React, { Suspense, useEffect, useState } from 'react';
import HeroSection from '../HomePageComponents/HeroSection';
import OurServicesSection from '../HomePageComponents/OurServicesSection';
import WhyChooseUsSection from '../HomePageComponents/WhyChooseUsSection';
import TestimonialsSection from '../HomePageComponents/TestimonialsSection';
import FAQSection from '../HomePageComponents/FAQSection';
import ContactSection from '../HomePageComponents/ContactSection';
import Intro from '../Sections/IntroSection';


function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-lime-400 text-2xl font-bold animate-pulse">
        Loading...
      </div>
    </div>
  );
}

function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // كل مرة تعمل reload يظهر الانترو
    setIntroDone(false);
  }, []);

  return (
    <section className="flex flex-col font-barlow justify-center items-center">
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Suspense fallback={<Loader />}>
            <HeroSection />
          </Suspense>
          <OurServicesSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </>
      )}
    </section>
  );
}

export default HomePage;