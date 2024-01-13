import Container from "@/components/Container";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-slate-50 ">
        <Container>
          <HeroSection />
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <FeaturesSection />
        </Container>
      </div>
    </div>
  );
}
