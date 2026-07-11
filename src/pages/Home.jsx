import React, { useEffect, useRef } from "react";
import Hero from "../components/home/Hero";
import TrustTicker from "../components/home/TrustTicker";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function Home() {
  const sectionsRef = useRef([]);

  const setSectionRef = (index) => (el) => {
    sectionsRef.current[index] = el;
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add(
          "transition-all",
          "duration-700",
          "opacity-0",
          "translate-y-10",
        );
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero sectionRef={setSectionRef(0)} />
      <TrustTicker sectionRef={setSectionRef(1)} />
      <Features sectionRef={setSectionRef(2)} />
      <Testimonials sectionRef={setSectionRef(3)} />
      <CTA sectionRef={setSectionRef(4)} />
    </>
  );
}

export default Home;
