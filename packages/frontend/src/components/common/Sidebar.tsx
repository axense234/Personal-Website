// React
import { FC, useEffect, useRef } from "react";
// Next
import Link from "next/link";
// Types
import { SidebarProps } from "types";
// React Icons
import { FaRegWindowClose } from "react-icons/fa";
// SCSS
import sidebarStyles from "@/scss/components/common/Sidebar.module.scss";
// Data
import { navPageLinks, smLinks } from "@/data";
// Components
import Logo from "./Logo";

const Sidebar: FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  // eslint-disable-next-line no-undef
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const sidebar = sidebarRef.current as HTMLElement;
    if (showSidebar) {
      sidebar.style.transform = "translateX(0%)";
    } else {
      sidebar.style.transform = "translateX(150%)";
    }
  }, [showSidebar]);

  return (
    <aside className={sidebarStyles.sidebarContainer} ref={sidebarRef}>
      <section className={sidebarStyles.sidebarContainer__title}>
        <div className={sidebarStyles.sidebarContainer__titleNav}>
          <FaRegWindowClose
            aria-label="Close Sidebar"
            title="Close Sidebar"
            onClick={() => setShowSidebar(false)}
          />
          <header className={sidebarStyles.sidebarContainer__titleLogo}>
            <Logo />
            <h2>Axense's Team</h2>
          </header>
        </div>
        <h3>Navigate</h3>
      </section>
      <ul className={sidebarStyles.sidebarContainer__pageLinks}>
        {navPageLinks.map((pageLink) => {
          return (
            <li
              key={pageLink.id}
              title={pageLink.label}
              aria-label={pageLink.label}
            >
              <Link href={pageLink.dest} target="_blank">
                <i>{pageLink.logo}</i>
                <h6>{pageLink.label}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={sidebarStyles.sidebarContainer__smLinks}>
        {smLinks.map((smLink) => {
          return (
            <li key={smLink.id} title={smLink.label} aria-label={smLink.label}>
              <Link href={smLink.dest} target="_blank">
                <i>{smLink.logo}</i>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
