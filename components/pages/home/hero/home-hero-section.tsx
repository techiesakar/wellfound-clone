import { ButtonType } from "@/app/lib/types";
import { HeroSection } from "@/components/common/hero-section/hero-section";

export const ButtonsProps: ButtonType[] = [
  {
    id: "1",
    label: "Find your next hire",
    path: "/recruit/overview",
    type: "primary",
    className: "rounded-xl font-medium",
  },
  {
    id: "2",
    label: "Find your next job",
    path: "/jobs",
    type: "outline",
    className: "rounded-xl font-medium",
  },
];

export const HomeHeroSection = () => {
  return (
    <div>
      <HeroSection
        title="AngelList Talent is now Wellfound"
        content="Where startups and job seekers connect."
        buttons={ButtonsProps}
      />
    </div>
  );
};
