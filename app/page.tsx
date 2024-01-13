import Container from "@/components/Container";
import CustomersSection from "@/components/customers/CustomersSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
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
      <div className="bg-sky-100">
        <Container>
          <CustomersSection />
        </Container>
      </div>
    </div>
  );
}
