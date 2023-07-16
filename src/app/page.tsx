import AboutMeLanding from "@/components/AboutMeLanding";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LandingAbout from "@/components/LandingAbout";
import LandingDisclaimar from "@/components/LandingDisclaimar";
import LandingPricing from "@/components/LandingPricing";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Header selected="home" />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <AboutMeLanding />
      <LandingAbout />
      <LandingDisclaimar />
      <LandingPricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
