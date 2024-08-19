import { FunctionComponent, useEffect, useState } from "react";
import TotalUsers from "./TotalUsers";
import Budget from "./Budget";
import styles from "./FrameComponent.module.css";
import axios from 'axios';

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const [propCount, setPropCount] = useState<string>("0"); // Default to "0"
  const [totalGain, setTotalGain] = useState<string>("$0");
  const [totalGainToday, setTotalGainToday] = useState<string>("$0");

  useEffect(() => {
    const fetchAccountData = async () => {
      const sessionId = localStorage.getItem('sessionId');
      
      if (sessionId) {
        try {
          // Fetch account data to calculate Total Gain
          const response = await axios.get(
            `https://www.myfxbook.com/api/get-my-accounts.xml?session=${sessionId}`
          );

          if (response.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, 'text/xml');
            const accounts = xmlDoc.getElementsByTagName('account');
            let totalGainSum = 0;

            // Update the account count
            setPropCount(accounts.length.toString());

            for (let i = 0; i < accounts.length; i++) {
              const gainElement = accounts[i].getElementsByTagName('gain')[0];
              const gainValue = gainElement ? parseFloat(gainElement.textContent || "0") : 0;

              totalGainSum += gainValue;
            }

            // Update the Total Gain state
            setTotalGain(totalGainSum.toFixed(2));
          } else {
            console.warn('Unexpected response status:', response.status);
          }
        } catch (error) {
          console.error('Error fetching gain data:', error);
        }

        try {
          // Fetch Total Gain Today data from the separate API
          const todayResponse = await axios.get(
            `https://www.myfxbook.com/api/get-daily-gain.xml?session=${sessionId}&id=12345&start=2000-01-01&end=2010-01-01`
          );

          if (todayResponse.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(todayResponse.data, 'text/xml');
            const todayElement = xmlDoc.getElementsByTagName('gain')[0];
            const todayGain = todayElement ? todayElement.textContent || "0" : "0";

            // Update the Total Gain Today state
            setTotalGainToday(parseFloat(todayGain).toFixed(2));
          } else {
            console.warn('Unexpected response status:', todayResponse.status);
          }
        } catch (error) {
          console.error('Error fetching today gain data:', error);
        }
      } else {
        console.error('Session ID not found in localStorage');
      }
    };

    fetchAccountData();
  }, []);

  return (
    <div className={[styles.totalUsersParent, className].join(" ")}>
      <TotalUsers
        totalUser="Total Portfolio"
        prop={propCount} // Display the total number of accounts
        icon="/icon@2x.png"
      />
      <Budget
        totalSales="Total Gain"
        separator={totalGain}
        icon="/icon-2@2x.png"
        icTrendingDown24px="/ictrendingup24px.svg"
  
      />
      <Budget
        totalSales="Total Gain Today"
        propMinWidth="123px"
        separator={totalGainToday}
        propMinWidth1="72px"
        icon="/icon-3@2x.png"
        icTrendingDown24px="/ictrendingup24px.svg"
        prop={totalGainToday}
        propColor="#00b69b"
        downFromYesterday="Gain"
      />
    </div>
  );
};

export default FrameComponent;
