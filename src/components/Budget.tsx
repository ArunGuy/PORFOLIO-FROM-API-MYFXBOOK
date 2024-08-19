import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Budget.module.css";

export type BudgetType = {
  className?: string;
  totalSales?: string;
  separator?: string;
  icon?: string;
  icTrendingDown24px?: string;
  prop?: string;
  downFromYesterday?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const Budget: FunctionComponent<BudgetType> = ({
  className = "",
  totalSales,
  propMinWidth,
  separator,
  propMinWidth1,
  icon,
  icTrendingDown24px,
  prop,
  propColor,
  downFromYesterday,
}) => {
  const totalSalesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const separatorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.budget, className].join(" ")}>
      <div className={styles.totalSales}>
        <div className={styles.bg} />
        <div className={styles.frameParent}>
          <div className={styles.totalSalesParent}>
            <div className={styles.totalSales1} style={totalSalesStyle}>
              {totalSales}
            </div>
            <b className={styles.separator} style={separatorStyle}>
              {separator}
            </b>
          </div>
          <img className={styles.icon} loading="lazy" alt="" src={icon} />
        </div>
        <div className={styles.icTrendingDown24pxParent}>
          <img
            className={styles.icTrendingDown24pxIcon}
            loading="lazy"
            alt=""
            src={icTrendingDown24px}
          />
          <div className={styles.downFromYesteWrapper}>
            <div className={styles.downFromYesteContainer}>
              <span style={spanStyle}>{prop}</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.downFromYesterday}>
                {downFromYesterday}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
