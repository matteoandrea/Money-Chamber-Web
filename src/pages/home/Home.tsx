import Tabs from "./components/Tabs";
import TotalInformationStat from "./components/TotalInformationStat";

export default function Home() {
  return (
    <div class=" text-center mx-8 space-y-4">
      <TotalInformationStat />
      <Tabs />
    </div>
  );
}
