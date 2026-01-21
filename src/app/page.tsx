import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import CategorySection from "@/components/CategorySection";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import GlobalReach from "@/components/GlobalReach";

import Innovation from "@/components/Innovation";

import ContactSection from "@/components/ContactSection";

import Testimonials from "@/components/Testimonials";
import LatestProjects from "@/components/LatestProjects";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Header />
      <Hero />
      <TrustSection />
      <FeaturedProducts />
      <CategorySection />
      <LatestProjects />
      <Testimonials />
      <Services />
      <Innovation />
      <GlobalReach />
      <ContactSection />
      <Footer />
    </main>
  );
}
