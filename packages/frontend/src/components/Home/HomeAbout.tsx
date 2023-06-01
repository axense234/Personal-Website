// React
import { FC } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Types
import { AboutLogo } from "types";
// Observer
import { useInView } from "react-intersection-observer";
// SCSS
import homeStyles from "@/scss/components/Home/Home.module.scss";
// Data
import { aboutContentLogos } from "@/data";
// Hooks
import usePopInAnimation from "@/hooks/usePopInAnimation";

const HomeAbout: FC = () => {
  const [textRef, inViewText, textEntry] = useInView();
  usePopInAnimation("showHorizontal", inViewText, textEntry);

  return (
    <section className={homeStyles.homeContainer__about}>
      <h2>About Me</h2>
      <div className={homeStyles.homeContainer__aboutContent}>
        <p ref={textRef} className="hidden">
          Hi there! My name is Axense, and I'm a passionate fullstack web
          developer specializing in Next.js. With a deep love for crafting
          engaging and seamless web experiences, I bring my expertise in Next.js
          to the table. From dynamic front-end designs to robust back-end
          functionality, I strive to create intuitive and user-friendly websites
          that leave a lasting impression.
        </p>
        <ul className={homeStyles.homeContainer__aboutContentLogos}>
          {aboutContentLogos.map((logo) => {
            return <AboutHomeLogo {...logo} key={logo.id} />;
          })}
        </ul>
      </div>
    </section>
  );
};

const AboutHomeLogo: FC<AboutLogo> = ({ id, dest, logoUrl, label }) => {
  const [logoRef, inViewLogo, logoEntry] = useInView();
  usePopInAnimation("showHorizontal", inViewLogo, logoEntry);

  return (
    <li ref={logoRef} className="hidden">
      <Link href={dest} target="_blank">
        <Image
          width={200}
          height={200}
          src={logoUrl}
          alt={label}
          title={label}
          aria-label={label}
        />
      </Link>
    </li>
  );
};

export default HomeAbout;
