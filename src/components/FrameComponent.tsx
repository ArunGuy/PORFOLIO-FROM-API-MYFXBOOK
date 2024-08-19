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
  const [propCount, setPropCount] = useState<string>("40,689"); // ค่าเริ่มต้น

  useEffect(() => {
    const fetchAccountCount = async () => {
      const sessionId = localStorage.getItem('sessionId'); // ดึง sessionId จาก localStorage
      
      if (sessionId) {
        try {
          const response = await axios.get(
            `https://www.myfxbook.com/api/get-my-accounts.xml?session=${sessionId}`
          );

          if (response.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, 'text/xml');
            const accounts = xmlDoc.getElementsByTagName('account');
            const accountCount = accounts.length;

            console.log('Number of Accounts:', accountCount);

            // อัปเดต propCount ตามจำนวน accounts
            setPropCount(accountCount.toString());
          } else {
            console.warn('Unexpected response status:', response.status);
          }
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      } else {
        console.error('Session ID not found in localStorage');
      }
    };

    fetchAccountCount();
  }, []);

  return (
    <div className={[styles.totalUsersParent, className].join(" ")}>
      <TotalUsers
        totalUser="Total Portfolio"
        prop={propCount} // แสดงจำนวน account ที่ดึงมาจาก API
        icon="/icon@2x.png"
        prop1="8.5%"
        upFromYesterday="Up from yesterday"
      />
      
      <Budget
        totalSales="Total Gain"
        separator="$89,000"
        icon="/icon-2@2x.png"
        icTrendingDown24px="/ictrendingdown24px.svg"
        prop="4.3%"
        downFromYesterday="Down from yesterday"
      />
      <Budget
        totalSales="Total Gain Today"
        propMinWidth="123px"
        separator="2040"
        propMinWidth1="72px"
        icon="/icon-3@2x.png"
        icTrendingDown24px="/ictrendingup24px.svg"
        prop="1.8%"
        propColor="#00b69b"
        downFromYesterday="Up from yesterday"
      />
    </div>
  );
};

export default FrameComponent;
