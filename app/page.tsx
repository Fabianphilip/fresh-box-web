import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Ride from "@/components/Ride";
import Vendors from "@/components/Vendors";
import WhyChoose from "@/components/WhyChoose";
import VendorSection from "@/components/VendorSection";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Features />

        <HowItWorks />

        <Ride />

        <Vendors />

        <WhyChoose />

        <VendorSection />

        <Download />

        <FAQ />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
