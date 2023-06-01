// React
import { FC } from "react";
// React Icons
import { MdArrowUpward } from "react-icons/md";
// SCSS
import footerStyles from "@/scss/components/common/Footer.module.scss";
// Components
import Logo from "./Logo";

const Footer: FC = () => {
  const handleGoUp = () => {
    // eslint-disable-next-line no-undef
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <footer className={footerStyles.footerContainer}>
      <section className={footerStyles.footerContainer__logo}>
        <Logo />
        <p>&copy; 2023 Axense's Team. All rights reserved.</p>
      </section>
      <button
        type="button"
        aria-label="Go Up Button"
        title="Go Up"
        className={footerStyles.footerContainer__goUp}
        onClick={() => handleGoUp()}
      >
        <MdArrowUpward />
      </button>
    </footer>
  );
};

export default Footer;
