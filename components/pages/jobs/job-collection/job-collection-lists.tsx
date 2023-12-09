import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { JobLists } from "./job-lists";
import { JobCard } from "./job-card";

export const JobCollectionLists = ({ className }: { className?: string }) => {
  return (
    <div className={` ${className} space-y-14`}>
      {JobLists.map((item) => (
        <div className="" key={item.category}>
          <h2 className="text-2xl mb-4">{item.category}</h2>

          {item.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ))}
    </div>
  );
};
