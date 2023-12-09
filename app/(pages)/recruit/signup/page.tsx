import { SignUpForm } from "@/components/common/forms/signup-form";
import { BsPatchCheck } from "react-icons/bs";

import React from "react";
const data = [
  {
    id: "1",
    title: "Post your job and source candidates for FREE",
  },
  { id: "2", title: "Save time with intelligent applicant sorting" },
  { id: "3", title: "Free built-in ATS to manage your pipeline" },
  { id: "4", title: "Industry high 40% candidate response rate" },
];

const RecruitSignupPage = () => {
  return (
    <main>
      <div className="flex h-screen py-20 lg:py-0 lg:flex-row flex-col lg:px-0 px-4 lg:justify-between lg:gap-0 gap-14 justify-center  w-full lg:overflow-hidden">
        {/* Left */}
        <div className="lg:w-[50%]  lg:order-2 order-2 flex justify-end xl:pr-[200px] lg:pr-[100px] lg:pl-[100px] items-center ">
          <SignUpForm />
        </div>
        {/* Right */}
        <div className="lg:w-[50%] w-full lg:order-1 lg:flex flex-col justify-center hidden relative gap-8">
          <div className="p-8 rounded-r-full bg-pink-600 text-white text-4xl items-center  font-semibold ">
            <div className="site-container">
              Powerful, FREE recruiting tools to find your perfect match!
            </div>
          </div>
          <div className="p-8">
            <div className="site-container">
              <ul className="flex flex-col gap-5">
                {data.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="gap-4 flex items-center text-lg"
                    >
                      <span className="text-pink-600 text-3xl">
                        <BsPatchCheck />
                      </span>

                      <p>{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecruitSignupPage;
