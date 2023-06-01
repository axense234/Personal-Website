type NavPageLink = {
  id: number;
  label: string;
  dest: string;
  // eslint-disable-next-line no-undef
  logo: JSX.Element;
};

type SMLink = {
  id: number;
  label: string;
  // eslint-disable-next-line no-undef
  logo: JSX.Element;
  dest: string;
};

type AboutLogo = {
  id: number;
  label: string;
  logoUrl: string;
  dest: string;
};

interface NavbarProps {
  // eslint-disable-next-line no-undef
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

interface SidebarProps {
  // eslint-disable-next-line no-undef
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
}

export { NavPageLink, AboutLogo, SMLink, NavbarProps, SidebarProps };
