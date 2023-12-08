import Link from "next/link";

import { Footer } from "@/components/navigation/footer/footer";
import { Header } from "@/components/navigation/header/header";
import { SignUpDropdown } from "@/components/navigation/header/signup-dropdown";

import { Button } from "@/components/ui/button";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header navitems={NavItems} buttons={<Buttons />} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const NavItems = [
  {
    id: "1",
    title: "Discover",
    path: "/",
  },
  {
    id: "2",
    title: "For Job Seekers",
    path: "/candidates/overview",
  },
  {
    id: "3",
    title: "For Companies",
    path: "/recruit/overview",
  },
];

const Buttons = () => {
  return (
    <>
      <Button asChild variant="outline" className="rounded-xl">
        <Link href="/login">Login</Link>
      </Button>

      <SignUpDropdown>
        <Button className="rounded-xl w-fu" variant="primary">
          Sign up
        </Button>
      </SignUpDropdown>
    </>
  );
};

export default HomeLayout;
