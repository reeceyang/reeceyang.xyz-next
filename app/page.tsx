import { FlowersAndLeaves } from "@/components/SVGPaths";

export default async function Home() {
  return (
    <div className="-translate-y-16">
      <div className="flex flex-row gap-2 m-auto w-fit translate-x-1">
        <FlowersAndLeaves />
      </div>
    </div>
  );
}
