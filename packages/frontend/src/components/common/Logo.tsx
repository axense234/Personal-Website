// React
import { FC } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// SCSS
import logoStyles from "@/scss/components/common/Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={logoStyles.logoContainer} title="Home Page">
      <Link href="/">
        <Image
          alt="Logo Image"
          aria-label="Logo Image"
          src="https://res.cloudinary.com/birthdayreminder/image/upload/v1685606161/Highschool%20Site%20App/logo_200x200_lgo1rf.png"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
