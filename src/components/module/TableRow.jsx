import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "../css/TableRow.module.css";
import { marketChart } from "../services/cryptoAPI";

function TableRow({ currency, coin, setChart }) {
  
  const {
    id,
    image,
    symbol,
    current_price,
    name,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;
 
   
  const showHandler = () => {
    try {
      const fetchChart = async () => {
        const res = await fetch(marketChart(id));
        const json = await res.json();

        setChart({...json,coin});
      };
      fetchChart();
    } catch (error) {
      setChart(null);
    }
  };

 
  return (
    <div className={styles.container}>
      <tr>
        <td>
          <div className={styles.symbol} onClick={showHandler}>
            <img src={image} alt="" />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>
          {currency === "usd" ? "$" : currency === "jpy" ? "¥" : "€"}
          {current_price.toLocaleString()}
        </td>
        <td className={price_change > 0 ? styles.success : styles.error}>
          {price_change.toFixed(2)}
        </td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? chartUp : chartDown} alt="" />
        </td>
      </tr>
    </div>
  );
}

export default TableRow;
