import { JobCollectionSection } from "@/components/pages/jobs/job-collection/job-collection-section";
import { JobHeroSection } from "@/components/pages/jobs/job-hero-section";
import { Button } from "@/components/ui/button";

const JobPage = () => {
  return (
    <div className="space-y-10">
      <JobHeroSection />
      <JobCollectionSection />
    </div>
  );
};

export default JobPage;
