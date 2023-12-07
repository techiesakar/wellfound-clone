import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import React from "react";

export const SignUpDropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        sideOffset={25}
        className="w-80 flex flex-col font-medium rounded-md gap-4"
      >
        <Link href="/" className="hover:text-active-red">
          I'm looking for a job
        </Link>
        <Link href="/" className="hover:text-active-red">
          I'm looking for a candidates
        </Link>
      </PopoverContent>
    </Popover>
  );
};
