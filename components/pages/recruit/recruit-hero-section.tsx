import { ButtonType } from "@/app/lib/types";
import { HeroSection } from "@/components/common/hero-section/hero-section";

export const ButtonsProps: ButtonType[] = [
  {
    id: "1",
    label: "Sign up now",
    path: "/recruit/signup",
    type: "primary",
    className: "rounded-xl font-medium",
  },
];

export const RecruitHeroSection = () => {
  return (
    <div>
      <HeroSection
        title={
          <>
            You have a job. <br /> We have 8m+ job seekers.
          </>
        }
        content="8 million startup-ready candidates from around the world, unique details you can't find anywhere else, and all the tools you need to hire. Get started for free."
        buttons={ButtonsProps}
      />
    </div>
  );
};
