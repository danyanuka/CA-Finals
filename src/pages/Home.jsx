import { NavLink } from "react-router-dom";
import { HomeHeader } from "../cmp/HomePage/HomeHeader";
import { FirstSection } from "../cmp/HomePage/FirstSection";
import { SecondSection } from "../cmp/HomePage/SecondSection";
import { ThirdSection } from "../cmp/HomePage/ThirdSection";

export function Home() {
  return (
    <div className="home-page-container">
      <HomeHeader />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
