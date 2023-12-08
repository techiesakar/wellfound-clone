import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroForm } from "./hero-form";

export const HomeHero = () => {
  return (
    <section className="lg:py-24 py-10">
      <div className="site-container grid lg:grid-cols-2 grid-cols-1 items-center gap-10 justify-between">
        {/* Left */}
        <div className="lg:space-y-7 space-y-6">
          <h1 className="lg:text-5xl text-3xl lg:leading-normal font-bold">
            AngelList Talent is now Wellfound
          </h1>
          <p>Where startups and job seekers connect.</p>
          <div className="flex sm:flex-row flex-col gap-4">
            <Button asChild className="rounded-xl" variant="primary" size="lg">
              <Link href="/">Find your next hire</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl font-medium"
              size="lg"
            >
              <Link href="/">Find your next job</Link>
            </Button>
          </div>
        </div>
        {/* Right */}
        <div className="flex lg:justify-end">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};
