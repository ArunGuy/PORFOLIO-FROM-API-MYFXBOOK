import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TotalUsers.module.css";

export type TotalUsersType = {
  className?: string;
  totalUser?: string;
  prop?: string;
  icon?: string;
  prop1?: string;
  upFromYesterday?: string;

  /** Style props */
  frameDivMinWidth?: CSSProperties["minWidth"];
  upFromYesterdContainerMinWidth?: CSSProperties["minWidth"];
};

const TotalUsers: FunctionComponent<TotalUsersType> = ({
  className = "",
  totalUser,
  frameDivMinWidth,
  prop,
  upFromYesterdContainerMinWidth,
  icon,
  prop1,
  upFromYesterday,
}) => {
  const totalUserStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: upFromYesterdContainerMinWidth,
    };
  }, [upFromYesterdContainerMinWidth]);

  return (
    <div className={[styles.totalUsers, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.frameParent}>
        <div className={styles.totalUserParent}>
          <div className={styles.totalUser} style={totalUserStyle}>
            {totalUser}
          </div>
          <b className={styles.b} style={bStyle}>
            {prop}
          </b>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
      </div>
      <div className={styles.icTrendingUp24pxParent}>
        <img
          className={styles.icTrendingUp24pxIcon}
          loading="lazy"
          alt=""
          src="/ictrendingup24px.svg"
        />
        <div className={styles.upFromYesterdWrapper}>
          <div className={styles.upFromYesterdContainer}>
            <span>{prop1}</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.upFromYesterday}>{upFromYesterday}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalUsers;
