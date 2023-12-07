import Link from "next/link";
import { Logo } from "../logo";
import { footerItems } from "./footerItems";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="site-container flex lg:flex-row flex-col gap-10 justify-between">
        <div className="">
          <Logo className="w-[200px] mb-5" />
          <ul className="flex items-center gap-3 ">
            <li className="text-2xl">
              <FaTwitter />
            </li>
            <li className="text-2xl">
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {footerItems.map((data) => (
            <ul className="flex flex-col gap-3 list-none" key={data.label}>
              <span className=" font-semibold">{data.label}</span>
              {data.items.map((item) => (
                <li key={item.name} className="">
                  <Link
                    href={item.path}
                    className="capitalize hover:underline  hover:text-link-touch "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};
