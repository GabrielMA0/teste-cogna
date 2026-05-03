import { CTASection, HeroBanner, SolutionsSection, Testimonials } from "@/components";

export default function Home() {
  return (
    <main>  
      <HeroBanner />
      <SolutionsSection title="Nossas Soluções" showAudience={false} showBtnSolucoes={true} />
      <Testimonials />
      <CTASection />
    </main>
  );
}
