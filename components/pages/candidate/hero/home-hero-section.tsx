import { ButtonType } from "@/app/lib/types";
import { HeroSection } from "@/components/common/hero-section/hero-section";

export const ButtonsProps: ButtonType[] = [
  {
    id: "1",
    label: "Create your profile",
    path: "/",
    type: "primary",
    className: "rounded-xl font-medium",
  },
  {
    id: "2",
    label: "Browse jobs",
    path: "/",
    type: "outline",
    className: "rounded-xl font-medium",
  },
];

export const CandidateHeroSection = () => {
  return (
    <div>
      <HeroSection
        title="Find the job made for you"
        content="We make it easy to find your dream job - regardless of your location. Browse over 100,000 jobs from top companies to fast-growing startups."
        buttons={ButtonsProps}
      />
    </div>
  );
};
