import Link from "next/link";
import { Footer } from "@/components/navigation/footer/footer";
import { Header } from "@/components/navigation/header/header";

import { Button } from "@/components/ui/button";

const JobPageLayout = ({ children }: { children: React.ReactNode }) => {
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
    path: "/discover",
  },
  {
    id: "2",
    title: "Overview",
    path: "/recruit/overview",
  },
  {
    id: "3",
    title: "Pricing",
    path: "/recruit/pricing",
  },
  {
    id: "4",
    title: "For Job Seekers",
    path: "/candidates/overview",
  },
];

const Buttons = () => {
  return (
    <>
      <Button asChild variant="outline" className="rounded-xl">
        <Link href="/login">Login</Link>
      </Button>

      <Button className="rounded-xl w-ful" variant="primary">
        <Link href="/recruit/signup"> Sign up</Link>
      </Button>
    </>
  );
};
export default JobPageLayout;
