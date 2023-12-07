import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  className?: string;
};

export const Logo = ({ className }: PropsType) => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={250}
        height={100}
        alt="logo"
        className={cn("w-full", className)}
      />
    </Link>
  );
};
