import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";

type JobPropsType = {
  job: {
    id: string;
    logo: string;
    title: string;
    path: string;
    company: string;
    location: string;
    salary: string;
    datePosted: string;
  };
};
export const JobCard = ({ job }: JobPropsType) => {
  return (
    <div className="flex lg:flex-row flex-col  gap-6 py-6 border-b border-gray-200">
      <div className="flex-1 flex items-center gap-4 ">
        <div>
          <Image
            className="rounded"
            src={job.logo}
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
        <div className="space-y-0.5 w-full">
          <div>{job.title}</div>
          <div className="flex items-center font-light text-sm flex-wrap">
            <span className="font-medium">{job.title}</span>
            <Dot className="w-6 h-6" />
            <span>{job.location}</span>
            <Dot className="w-6 h-6  text-gray-400" />
            <span>{job.salary}</span>
            <Dot className="w-6 h-6  text-gray-400" />
            <span>{job.datePosted}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-fit">
        <Button variant="outline" className="border border-gray-300">
          Save
        </Button>
        <Button variant="primary">Apply</Button>
      </div>
    </div>
  );
};
