import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HeroForm } from "@/components/common/forms/hero-form";
import { ButtonType } from "@/app/lib/types";
import Image from "next/image";

type PropsType = {
  children?: React.ReactNode;
  title: string;
  content?: string;
  buttons?: ButtonType[];
};

export const HeroSection = ({ title, content, buttons }: PropsType) => {
  console.log(buttons);
  return (
    <section className="lg:py-24 py-10">
      <div className="site-container grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:gap-32 justify-between">
        {/* Left */}
        <div className="lg:space-y-7 space-y-6">
          <h1 className="lg:text-5xl text-3xl lg:leading-normal font-semibold">
            {title}
          </h1>
          {content && <p>{content}</p>}
          {buttons && (
            <div className="flex sm:flex-row flex-col gap-4">
              {buttons?.map((button: ButtonType) => (
                <Button
                  key={button.id}
                  variant={button.type}
                  asChild
                  className="rounded-xl"
                  size="lg"
                >
                  <Link href="/">{button.label}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
        {/* Right */}
        <div className="flex lg:justify-end">
          <Image
            src="/hero-banner.png"
            width={1000}
            height={1000}
            alt="Hero Banner"
            className="lg:block hidden"
          />
        </div>

        <div className="lg:col-span-2">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};
