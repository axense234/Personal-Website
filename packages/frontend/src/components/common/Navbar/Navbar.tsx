// React
import { FC } from "react";
// Types
import { NavbarProps } from "types";
// SCSS
import navbarStyles from "@/scss/components/common/Navbar.module.scss";
// Components
import Logo from "../Logo";
import NavMenu from "./NavMenu";

const Navbar: FC<NavbarProps> = ({ setShowSidebar }) => {
  return (
    <nav className={navbarStyles.navContainer}>
      <header className={navbarStyles.navContainer__navLogo}>
        <Logo />
        <h2>Axense's Team</h2>
      </header>
      <NavMenu setShowSidebar={setShowSidebar} />
    </nav>
  );
};

export default Navbar;
