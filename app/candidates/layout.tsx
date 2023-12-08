import { Footer } from "@/components/navigation/footer/footer";
import { Header } from "@/components/navigation/header/header";

const CandidateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default CandidateLayout;
