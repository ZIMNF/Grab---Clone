import Video from "@/components/Video";
import Services from "../components/Services";
import History from "@/components/History";
import Testi from "@/components/Testi";

export default function Home() {
  return (
    <div className=" bg-black text-white">
      <Video />
      <Services />
      <History />
      <Testi />
    </div>
  );
}
