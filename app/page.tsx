import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import Image from "next/image";
import FAQ from "@/components/sections/faq/default";
import Logos from "@/components/sections/logos/default";
import Items from "@/components/sections/items/default";
import CTA from "@/components/sections/cta/default";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
