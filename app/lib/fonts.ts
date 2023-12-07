import localFont from "next/font/local";

export const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/GraphikThin.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/GraphikLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/GraphikMedium.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/GraphikRegular.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/GraphikSemibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/GraphikBold.otf",
      weight: "700",
    },

    {
      path: "../../public/fonts/GraphikSuper.otf",
      weight: "800",
    },
  ],
});
