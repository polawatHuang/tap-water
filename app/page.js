import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Announcement from "@/components/Announcement";
import MainSystems from "@/components/MainSystems";
import StatsCloud from "@/components/StatsCloud";
import GISSection from "@/components/GISSection";
import HowToUse from "@/components/HowToUse";
import SupportFooter from "@/components/SupportFooter";

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Announcement />
      <MainSystems />
      <StatsCloud />
      <GISSection />
      <HowToUse />
      <SupportFooter />
    </main>
  );
}