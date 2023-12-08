import { AchievementSection } from "@/components/common/achievement-section/achievement-section";
import { TestimonialSection } from "@/components/common/testimonial-section/testimonail-section";
import { WhyJobSeekersLoveUsSection } from "@/components/common/why-they-love-us/why-job-seekers-love-us";
import { WhyRecruitersLoveUsSection } from "@/components/common/why-they-love-us/why-recruiters-love-us";
import { HomeHero } from "@/components/pages/home/hero/home-hero-section";

export default function Home() {
  return (
    <div className="space-y-10">
      <HomeHero />
      <AchievementSection />
      <WhyJobSeekersLoveUsSection />
      <WhyRecruitersLoveUsSection />
      <TestimonialSection />
    </div>
  );
}
