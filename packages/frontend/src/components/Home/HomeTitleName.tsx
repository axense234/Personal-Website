// React
import { FC } from "react";
// SCSS
import homeStyles from "@/scss/components/Home/Home.module.scss";

const HomeTitleName: FC = () => {
  return (
    <div className={homeStyles.homeContainer__introTitleName}>
      <span>a</span>
      <span>x</span>
      <span>e</span>
      <span>n</span>
      <span>s</span>
      <span>e</span>
    </div>
  );
};

export default HomeTitleName;
