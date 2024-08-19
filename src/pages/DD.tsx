import { FunctionComponent, useEffect, useState } from "react";
import MainBgColor from "../components/MainBgColor";
import FrameComponent from "../components/FrameComponent";
import SalesDetails from "../components/SalesDetails";
import DealsDetails from "../components/DealsDetails";
import styles from "./DD.module.css";
import axios from 'axios';

const DD: React.FC = () => {
  const [accountName, setAccountName] = useState<string>('Your Name');
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionId = async () => {
      try {
        const response = await axios.get(
          'https://www.myfxbook.com/api/login.xml?email=arunwichchusin@gmail.com&password=Mas050322566'
        );

        console.log('API Response:', response.data);

        if (response.status === 200) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response.data, 'text/xml');
          const session = xmlDoc.getElementsByTagName('session')[0]?.textContent;

          console.log('Session ID:', session);

          if (session) {
            setSessionId(session);
            localStorage.setItem('sessionId', session); // เก็บ sessionId ใน localStorage
            fetchAccountName(session);
          }
        } else {
          console.warn('Unexpected response status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching session ID:', error);
        setAccountName('Error fetching name');
      }
    };

    const fetchAccountName = async (session: string) => {
      try {
        const response = await axios.get(
          `https://www.myfxbook.com/api/get-my-accounts.xml?session=${session}`
        );

        console.log('Account API Response:', response.data);

        if (response.status === 200) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response.data, 'text/xml');
          const name = xmlDoc.getElementsByTagName('name')[0]?.textContent || 'Unknown Account';

          console.log('Parsed Account Name:', name);
          setAccountName(name);
        }
      } catch (error) {
        console.error('Error fetching account name:', error);
        setAccountName('Error fetching name');
      }
    };

    fetchSessionId();
  }, []);

  // ฟังก์ชันสำหรับดึง sessionId จาก localStorage
  const getSessionId = () => {
    return localStorage.getItem('sessionId');
  };

  // ใช้ sessionId ที่ดึงมาจาก localStorage ในโค้ดอื่น
  const sessionIdFromStorage = getSessionId();
  if (sessionIdFromStorage) {
    console.log('Session ID from localStorage:', sessionIdFromStorage);
    // ใช้งาน sessionId ที่ดึงมาจาก localStorage
  }

  return (
    <div className={styles.dd1}>
      <div className={styles.carBrands}>
        <MainBgColor />
        <FrameComponent />
        <SalesDetails />
        <h1 className={styles.dashboard}>
          Dashboard - Login Successful! Welcome
        </h1>
        <DealsDetails />
      </div>
    </div>
  );
};

export default DD;
