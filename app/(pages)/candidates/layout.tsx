import Link from "next/link";

import { Footer } from "@/components/navigation/footer/footer";
import { Header } from "@/components/navigation/header/header";

import { Button } from "@/components/ui/button";

const CandidateLayout = ({ children }: { children: React.ReactNode }) => {
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
    path: "/candidates/overview",
  },
  {
    id: "3",
    title: "Jobs",
    path: "/jobs",
  },
  {
    id: "4",
    title: "Featured",
    path: "/candidates/featured",
  },
  {
    id: "5",
    title: "Remote",
    path: "/candidates/remote",
  },
  {
    id: "6",
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

      <Button className="rounded-xl w-fu" variant="primary">
        <Link href="/jobs/signup">Sign up</Link>
      </Button>
    </>
  );
};

export default CandidateLayout;
