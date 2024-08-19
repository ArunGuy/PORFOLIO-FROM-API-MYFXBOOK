import { FunctionComponent } from "react";
import styles from "./MainBgColor.module.css";

export type MainBgColorType = {
  className?: string;
};

const MainBgColor: FunctionComponent<MainBgColorType> = ({
  className = "",
}) => {
  return (
    <main className={[styles.mainBgColor, className].join(" ")}>
      <section className={styles.mainBg} />
    </main>
  );
};

export default MainBgColor;
