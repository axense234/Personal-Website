// React
import { FC } from "react";
// Next
import Image from "next/image";
// Observer
import { useInView } from "react-intersection-observer";
// SCSS
import homeStyles from "@/scss/components/Home/Home.module.scss";
// Components
import HomeTitleName from "./HomeTitleName";

const HomeIntro: FC = () => {
  return (
    <section className={homeStyles.homeContainer__intro}>
      <header className={homeStyles.homeContainer__introTitle}>
        <h1>
          Hello, i am
          <HomeTitleName />
        </h1>
        <h2>a fullstack web developer</h2>
      </header>
      <Image
        width={500}
        height={500}
        src="https://res.cloudinary.com/birthdayreminder/image/upload/v1685520828/Personal%20Website/Web_Developer_Flatline_ui01px.png"
        alt="Web Developer Image"
        title="Web Developer Image"
        aria-label="Web Developer Image"
      />
    </section>
  );
};

export default HomeIntro;
