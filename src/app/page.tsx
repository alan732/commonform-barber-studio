import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroduction } from "@/components/sections/BrandIntroduction";
import { ServiceMenu } from "@/components/services/ServiceMenu";
import { EditorialImageSection } from "@/components/sections/EditorialImageSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TeamPreviewSection } from "@/components/sections/TeamPreviewSection";
import { LookbookPreviewSection } from "@/components/sections/LookbookPreviewSection";
import { StudioStatement } from "@/components/sections/StudioStatement";
import { FinalBookingCTA } from "@/components/sections/FinalBookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntroduction />
      <ServiceMenu />
      <EditorialImageSection />
      <ProcessSection />
      <TeamPreviewSection />
      <LookbookPreviewSection />
      <StudioStatement />
      <FinalBookingCTA />
    </>
  );
}
