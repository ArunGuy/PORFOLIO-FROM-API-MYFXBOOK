
import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./SalesDetails.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export type SalesDetailsType = {
  className?: string;
};

const SalesDetails: FunctionComponent<SalesDetailsType> = ({
  className = "",
}) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      const sessionId = localStorage.getItem("sessionId");

      if (sessionId) {
        try {
          // Fetch accounts first
          const accountResponse = await axios.get(
            `https://www.myfxbook.com/api/get-my-accounts.xml?session=${sessionId}`
          );

          if (accountResponse.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(
              accountResponse.data,
              "text/xml"
            );
            const accounts = xmlDoc.getElementsByTagName("account");

            const gainData: number[] = [];
            const dailyGainData: number[] = [];
            const absGainData: number[] = [];

            for (let i = 0; i < accounts.length; i++) {
              const gainElement = accounts[i].getElementsByTagName("gain")[0];
              const dailyGainElement =
                accounts[i].getElementsByTagName("dailyGain")[0];
              const absGainElement =
                accounts[i].getElementsByTagName("absGain")[0];

              const gain = gainElement
                ? parseFloat(gainElement.textContent || "0")
                : 0;
              const dailyGain = dailyGainElement
                ? parseFloat(dailyGainElement.textContent || "0")
                : 0;
              const absGain = absGainElement
                ? parseFloat(absGainElement.textContent || "0")
                : 0;

              gainData.push(gain);
              dailyGainData.push(dailyGain);
              absGainData.push(absGain);
            }

            // Set up the data for the chart
            setChartData({
              labels: Array.from(
                { length: accounts.length },
                (_, i) => `Account ${i + 1}`
              ),
              datasets: [
                {
                  label: "Gain",
                  data: gainData,
                  borderColor: "rgba(0, 171, 85, 1)",
                  backgroundColor: "rgba(0, 171, 85, 0.2)",
                },
                {
                  label: "Daily Gain",
                  data: dailyGainData,
                  borderColor: "rgba(255, 141, 10, 1)",
                  backgroundColor: "rgba(255, 141, 10, 0.2)",
                },
                {
                  label: "Abs Gain",
                  data: absGainData,
                  borderColor: "rgba(0, 123, 255, 1)",
                  backgroundColor: "rgba(0, 123, 255, 0.2)",
                },
              ],
            });
          } else {
            console.warn("Unexpected response status:", accountResponse.status);
          }
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      } else {
        console.error("Session ID not found in localStorage");
      }
    };

    fetchAccountData();
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: 'rgba(255, 255, 255, 1)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
      }
    }
  };

  return (
    <footer className={`${styles.salesDetails} ${className}`}>
      <div className={styles.salesChart}>
        <h2 className={styles.sales}>PORTFOLIO</h2>
        <div className={styles.chartContainer}>
          {chartData ? (
            <Line data={chartData} options={chartOptions} />
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default SalesDetails;