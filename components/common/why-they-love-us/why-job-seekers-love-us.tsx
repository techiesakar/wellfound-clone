import { Button } from "@/components/ui/button";
import { DollarSign, Network, Pointer, Share, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const data = [
  {
    title:
      "Unique jobs at startups and tech companies you can't find anywhere else",
    icon: Star,
  },
  {
    title:
      "Say goodbye to cover letters - your profile is all you need. One click to apply and you're done",
    icon: Pointer,
  },
  {
    title:
      "Everything you need to know to job search - including seeing salary and stock options upfront when looking",
    icon: DollarSign,
  },
  {
    title:
      "Connect directly with founders at top startups - no third party recruiters allowed",
    icon: Network,
  },
];

export const WhyJobSeekersLoveUsSection = () => {
  return (
    <section>
      <div className="site-container grid lg:grid-cols-2 gap-20 items-center lg:py-16 py-10">
        <div className="relative lg:block hidden">
          <Image
            src="/job-seeker-banner.png"
            alt="Job Seeker"
            width={600}
            height={600}
            className="w-full"
          />
        </div>
        <div className="space-y-7 max-w-[500px]">
          <div className="uppercase text-lg font-semibold tracking-wider">
            Got Talent?
          </div>
          <h2 className="max-w-[350px] text-4xl font-semibold">
            Why job seekers love us
          </h2>

          <ul className="flex flex-col gap-4">
            {data.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="gap-5 flex items-center text-base font-medium"
                >
                  <Icon className="w-10 h-10 font-light stroke-1" />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="hover:text-active-red text-lg"
              asChild
            >
              <Link href="/login">Learn more</Link>
            </Button>

            <Button variant="primary" size="lg" className="text-lg" asChild>
              <Link href="/login">Sign up now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
