import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./DealsDetails.module.css";

export type DealsDetailsType = {
  className?: string;
};

const DealsDetails: FunctionComponent<DealsDetailsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.dealsDetails, className].join(" ")}>
      <img className={styles.cardIcon} alt="" src="/card1.svg" />
      <div className={styles.dealsChart}>
        <div className={styles.salesWrapper}>
          <h2 className={styles.sales}>PORTFOLIO Details</h2>
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
                src="/shape-1.svg"
                style={{ marginRight: "16px" }}
              />
            )}
          >
            <MenuItem>October</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.productTable}>
        <div className={styles.tableHeader}>
          <div className={styles.rectangle} />
          <b className={styles.productName}>Portfolio name</b>
          <div className={styles.tableHeaderLabel}>
            <b className={styles.location}>Broker</b>
          </div>
          <div className={styles.tableHeaderLabel1}>
            <b className={styles.dateTime}>Balance</b>
          </div>
          <div className={styles.tableHeaderLabel2}>
            <b className={styles.piece}>Gain</b>
          </div>
          <div className={styles.tableHeaderLabel3}>
            <b className={styles.amount}>Today</b>
          </div>
          <b className={styles.status}>Status</b>
        </div>
        <div className={styles.productRow}>
          <div className={styles.productImageContainerParent}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className={styles.appleWatchWrapper}>
                <div className={styles.appleWatch}>Apple Watch</div>
              </div>
            </div>
            <div className={styles.appleWatchWrapper}>
              <div className={styles.marjolaineLand}>
                6096 Marjolaine Landing
              </div>
            </div>
            <div className={styles.pWrapper}>
              <div className={styles.marjolaineLand}>12.09.2019 - 12.53 PM</div>
            </div>
            <div className={styles.productStatusIconWrapper}>
              <div className={styles.productStatusIcon}>423</div>
            </div>
            <div className={styles.productDeliveryIconWrapper}>
              <div className={styles.productDeliveryIcon}>$34,295</div>
            </div>
            <div className={styles.deliveredWrapper}>
              <Button
                className={styles.delivered}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#00b69b",
                  borderRadius: "13.5px",
                  "&:hover": { background: "#00b69b" },
                  height: 27,
                }}
              >
                UPDATE
              </Button>
            </div>
          </div>
        </div>
        <img
          className={styles.productTableChild}
          loading="lazy"
          alt=""
          src="/line-2.svg"
        />
        <div className={styles.productRow1}>
          <div className={styles.productImageContainerParent}>
            <div className={styles.imageParent}>
              <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
              <div className={styles.appleWatchContainer}>
                <div className={styles.appleWatch1}>Apple Watch</div>
              </div>
            </div>
            <div className={styles.marjolaineLandContainer}>
              <div className={styles.marjolaineLand1}>
                6096 Marjolaine Landing
              </div>
            </div>
            <div className={styles.pContainer}>
              <div className={styles.marjolaineLand1}>
                12.09.2019 - 12.53 PM
              </div>
            </div>
            <div className={styles.productStatusIconWrapper}>
              <div className={styles.div}>423</div>
            </div>
            <div className={styles.productDeliveryIconWrapper}>
              <div className={styles.div1}>$34,295</div>
            </div>
            <div className={styles.deliveredContainer}>
              <div className={styles.delivered1}>
                <div className={styles.rectangle1} />
                <b className={styles.pending}>Pending</b>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.productTableChild} alt="" src="/line-2-1.svg" />
        <div className={styles.productRow1}>
          <div className={styles.productImageContainerParent}>
            <div className={styles.imageParent}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.appleWatchContainer}>
                <div className={styles.marjolaineLand1}>Apple Watch</div>
              </div>
            </div>
            <div className={styles.marjolaineLandContainer}>
              <div className={styles.marjolaineLand1}>
                6096 Marjolaine Landing
              </div>
            </div>
            <div className={styles.pContainer}>
              <div className={styles.marjolaineLand1}>
                12.09.2019 - 12.53 PM
              </div>
            </div>
            <div className={styles.productStatusIconWrapper}>
              <div className={styles.div}>423</div>
            </div>
            <div className={styles.productDeliveryIconWrapper}>
              <div className={styles.div1}>$34,295</div>
            </div>
            <div className={styles.deliveredFrame}>
              <div className={styles.delivered2}>
                <div className={styles.rectangle2} />
                <b className={styles.pending}>Rejected</b>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.productTableChild} alt="" src="/line-2-1.svg" />
      </div>
    </div>
  );
};

export default DealsDetails;
