// React
import { FC } from "react";
// SCSS
import homeStyles from "@/scss/components/Home/Home.module.scss";
// Components
import HomeIntro from "@/components/Home/HomeIntro";
import HomeAbout from "@/components/Home/HomeAbout";
import SectionDelimiter from "@/components/common/SectionDelimiter";

const Home: FC = () => {
  return (
    <main className={homeStyles.homeContainer}>
      <HomeIntro />
      <SectionDelimiter />
      <HomeAbout />
    </main>
  );
};

export default Home;
