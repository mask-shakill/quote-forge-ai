import Landing from "@/components/Landing";
import MediaSection from "@/components/MediaSection";
import UpcomingProducts from "@/components/UpcomingProducts";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <div>
      <Landing />
      <WorkingProcess />
      <MediaSection />
      <UpcomingProducts />
    </div>
  );
}
