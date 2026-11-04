import RandomDivider from "@/components/RandomDivider";
import { FlowersAndLeaves } from "@/components/SVGPaths";

export default async function Home() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="-translate-y-16">
        <div className="flex flex-row gap-2 m-auto w-fit translate-x-1 h-48">
          <FlowersAndLeaves />
        </div>
      </div>
      <div className="mx-auto w-64 flex flex-grow mt-auto h-full">
        <div className="flex-grow mt-auto">
          <RandomDivider />
        </div>
      </div>
    </div>
  );
}
