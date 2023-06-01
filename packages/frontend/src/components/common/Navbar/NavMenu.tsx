// React
import { FC } from "react";
// Types
import { NavbarProps } from "types";
// Next
import Image from "next/image";
// SCSS
import navMenuStyles from "@/scss/components/common/Navbar.module.scss";

const NavMenu: FC<NavbarProps> = ({ setShowSidebar }) => {
  return (
    <button
      type="button"
      className={navMenuStyles.navContainer__navMenu}
      onClick={() => setShowSidebar(true)}
    >
      <Image
        width={50}
        height={50}
        src="https://res.cloudinary.com/birthdayreminder/image/upload/v1685522076/Personal%20Website/3_line_black_menu_himsrg.png"
        alt="Navigation Menu Button"
        aria-label="Navigation Menu Button"
      />
    </button>
  );
};

export default NavMenu;
