import JobCollectionAside from "./job-collection-aside";
import { JobCollectionLists } from "./job-collection-lists";
export const JobCollectionSection = () => {
  return (
    <section className="lg:py-10">
      <div className="site-container flex lg:flex-row flex-col justify-between gap-8">
        <JobCollectionLists className="flex-1" />
        {/* <JobCollectionAside className="max-w-[300px] w-full" /> */}
      </div>
    </section>
  );
};
