import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Grid,
  Group,
  Network,
  Pointer,
  Share,
  Star,
  Users,
  Waypoints,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const data = [
  {
    title:
      "8 million responsive and startup-ready candidates, with all the information you need to vet them",
    icon: Users,
  },
  {
    title:
      "Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free",
    icon: Waypoints,
  },
  {
    title:
      "A free applicant tracking system, or free integration with any ATS you may already use",
    icon: Grid,
  },
];

export const WhyRecruitersLoveUsSection = () => {
  return (
    <section>
      <div className="site-container grid lg:grid-cols-2 gap-20 items-center lg:py-16 py-10">
        <div className="relative lg:block hidden order-2">
          <Image
            src="/recruiters-banner.png"
            alt="Recruiters"
            width={600}
            height={600}
            className="w-full"
          />
        </div>
        <div className="space-y-7 max-w-[500px]">
          <div className="uppercase text-lg font-semibold tracking-wider">
            Need Talent?
          </div>
          <h2 className="max-w-[350px] text-4xl font-semibold">
            Why recruiters love us
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
