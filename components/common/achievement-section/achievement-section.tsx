import { cn } from "@/app/lib/utils";
import React from "react";
export const data = [
  {
    label: "Tech Jobs",
    count: "130K+",
    className: "text-active-red",
  },
  {
    label: "Matches Made",
    count: "6,000,000+",
    className: "text-pink-600",
  },
  {
    label: "Startup-ready candidates",
    count: "8M+",
    className: "text-purple-600",
  },
  {
    label: "Companies",
    count: "27K",
    className: "text-yellow-700",
  },

  {
    label: "Hires",
    count: "95K",
    className: "text-orange-500",
  },
];

export const AchievementSection = () => {
  return (
    <section>
      <div className="site-container flex flex-wrap justify-center ">
        {data.map((item, index) => {
          if (index <= 2) {
            return (
              <div
                key={index}
                className={cn(
                  `lg:text-4xl text-2xl lg:w-1/3 w-full justify-center p-5 lg:p-10 leading-normal lg:border  flex items-center flex-col  first:border-x-0 last:border-x-0  border-gray-200 font-semibold  text-center ${item.className}`,
                  index === 2 && "border-r-0"
                )}
              >
                <div>{item.count}</div>
                <div>{item.label}</div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className={`lg:text-4xl text-2xl lg:w-1/2 w-full justify-center border-t-0 p-5 lg:p-10 flex items-center flex-col leading-normal lg:border border-l-0 last:border-r-0   border-gray-200 font-semibold  text-center ${item.className}`}
              >
                <div>{item.count}</div>
                <div>{item.label}</div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
