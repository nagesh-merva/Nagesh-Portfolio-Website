"use client"
import MainSection from "./components/MainSection"
import LatestWork from "./components/LatestWork"

export default function Home() {
  return (
    <div className="h-full w-full">
      <MainSection />
      <LatestWork />
    </div>
  );
}
