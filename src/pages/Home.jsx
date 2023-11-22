import { NavLink } from "react-router-dom";
import { HomeHeader } from "../cmp/HomePage/HomeHeader";
import { FirstSection } from "../cmp/HomePage/FirstSection";
import { SecondSection } from "../cmp/HomePage/SecondSection";

export function Home() {
  return (
    <div className="home-page-container">
      <HomeHeader />
      <div>
        <FirstSection />
        <SecondSection />
      </div>
    </div>
  );
}
