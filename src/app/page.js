"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
