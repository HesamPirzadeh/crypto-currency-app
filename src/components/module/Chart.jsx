import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { convertData } from "../helper/converter";

import styles from "../css/Chart.module.css";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  console.log(chart);
  console.log(convertData(chart, type));

  const typeHandler =(event)=>{
    if (event.target.tagName === "BUTTON") {
      const newTypes = event.target.innerText.toLowerCase().replace(" ","_")
      setType(newTypes)
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <div className={styles.names}>
            <img src={chart.coin.image} alt="" />
            <p>{chart.coin.name}</p>
          </div>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>

        <div className={styles.types} onClick={typeHandler}>
          <button className={type ==="prices" ? styles.selected :null }>Prices</button>
          <button className={type ==="market_caps" ? styles.selected :null }>Market caps</button>
          <button className={type ==="total_volumes" ? styles.selected :null }>Total Volumes</button>
        </div>

        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
