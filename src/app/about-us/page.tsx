import Header from "@/components/Header";
import Section1 from "@/components/About-Us/Section1";
import Section2 from "@/components/About-Us/Section2";
import Section3 from "@/components/About-Us/Section3";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <main className="">
      <Header selected="about-us" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
}
