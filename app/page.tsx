import EnvelopeTab from "@/Models/envelopeTab";
import TotalInformationStat from "./components/totalInformationStat";

export default function Home() {
    return (
        <div className=" text-center mx-8 space-y-4">
            <TotalInformationStat />
            <EnvelopeTab />
        </div>
    );
}