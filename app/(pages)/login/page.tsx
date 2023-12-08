import { LoginForm } from "@/components/pages/login/login-form";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <main>
      <div className="flex h-screen py-20 lg:py-0 lg:flex-row flex-col lg:px-0 px-4 lg:justify-between lg:gap-0 gap-14 justify-center  w-full lg:overflow-hidden">
        {/* Left */}
        <div className="lg:w-[50%]  lg:order-1 order-2 flex justify-end xl:pr-[200px] lg:pr-[100px] lg:pl-[100px] items-center ">
          <LoginForm />
        </div>
        {/* Right */}
        <div className="lg:w-[40%] w-full lg:order-2 flex flex-col  relative">
          <div className="lg:block hidden">
            <Image
              src="/login-banner.png"
              width={1000}
              height={1000}
              quality={100}
              className="w-full object-contain"
              alt="login banner"
            />
          </div>

          <div className="lg:pb-20 flex justify-center text-center">
            <div className="max-w-[360px]">
              <h2 className="lg:text-5xl text-3xl font-semibold mb-4">
                Find the job made for you.
              </h2>
              <p className="font-light">
                Browse over 130K jobs at top companies and fast-growing
                startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
