import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Compliance from "@/components/Compliance";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <Approach />
      <Services />
      <Workflow />
      <Stats />
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <FAQ />
      <FinalCTA />
      <Footer />

      <Script id="scroll-nav">
        {`
          const nav = document.getElementById('nav');
          window.addEventListener('scroll', () => {
            if (window.scrollY > 8) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
          });
        `}
      </Script>
      <Script id="fade-in">
        {`
          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
              }
            });
          }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
          document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
        `}
      </Script>
    </>
  );
}