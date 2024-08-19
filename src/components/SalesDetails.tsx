import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./SalesDetails.module.css";

export type SalesDetailsType = {
  className?: string;
};

const SalesDetails: FunctionComponent<SalesDetailsType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.salesDetails, className].join(" ")}>
      <img className={styles.cardIcon} alt="" src="/card.svg" />
      <div className={styles.salesChart}>
        <div className={styles.salesWrapper}>
          <h2 className={styles.sales}>{`PORTFOLIO `}</h2>
        </div>
        <FormControl
          className={styles.monthSelector}
          variant="standard"
          sx={{
            borderColor: "#cfcfcf",
            borderStyle: "SOLID",
            borderTopWidth: "0.6000000238418579px",
            borderRightWidth: "0.6000000238418579px",
            borderBottomWidth: "0.6000000238418579px",
            borderLeftWidth: "0.6000000238418579px",
            backgroundColor: "#323d4e",
            borderRadius: "4px",
            width: "8.441558441558442%",
            height: "28px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "28px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "28px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "28px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "28px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: 12,
              fontWeight: "SemiBold",
              fontFamily: "Nunito Sans",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "18px",
            },
          }}
        >
          <InputLabel color="success" />
          <Select
            color="success"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="10px"
                height="6px"
                src="/shape.svg"
                style={{ marginRight: "16px" }}
              />
            )}
          >
            <MenuItem>October</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.frameParent}>
          <div className={styles.chartValuesWrapper}>
            <div className={styles.chartValues}>
              <div className={styles.chartValue}>100%</div>
              <div className={styles.chartValue1}>80%</div>
              <div className={styles.chartValue1}>60%</div>
              <div className={styles.chartValue1}>40%</div>
              <div className={styles.chartValue1}>20%</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.lineParent}>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img className={styles.graphIcon} alt="" src="/graph.svg" />
            </div>
            <div className={styles.combinedShapeParent}>
              <img
                className={styles.combinedShapeIcon}
                loading="lazy"
                alt=""
                src="/combined-shape.svg"
              />
              <b className={styles.legendLabel}>64,3664.77</b>
            </div>
          </div>
        </div>
        <div className={styles.chartContainerInner}>
          <div className={styles.kParent}>
            <div className={styles.k}>5k</div>
            <div className={styles.k1}>10k</div>
            <div className={styles.k1}>15k</div>
            <div className={styles.k1}>20k</div>
            <div className={styles.k1}>25k</div>
            <div className={styles.k1}>30k</div>
            <div className={styles.k1}>35k</div>
            <div className={styles.k1}>40k</div>
            <div className={styles.k1}>45k</div>
            <div className={styles.k1}>50k</div>
            <div className={styles.k1}>55k</div>
            <div className={styles.k1}>60k</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SalesDetails;
