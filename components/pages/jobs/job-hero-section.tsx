import Image from "next/image";
import React from "react";

export const JobHeroSection = () => {
  return (
    <section className="px-14 py-10 flex justify-between  items-center">
      <div className="w-1/4 lg:block hidden">
        <Image
          src="/hero-1.png"
          alt="Hero One"
          width={375}
          height={375}
          className="w-full max-w-[375px]"
        />
      </div>
      <div className="flex-1 text-center space-y-4">
        <div className="lg:font-semibold text-sm tracking-wider">
          OVER 130K REMOTE & LOCAL STARTUP JOBS
        </div>
        <h1 className="font-semibold text-3xl lg:text-7xl">
          Find what's next:
        </h1>
      </div>
      <div className="w-1/4 lg:block hidden">
        <Image
          src="/hero-2.png"
          alt="Hero One"
          width={375}
          height={375}
          className="w-full max-w-[375px]"
        />
      </div>
    </section>
  );
};
