import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";

import styles from "../css/TableCoin.module.css";

function TableCoin({ coin, loading ,currency,setChart }) {
  console.log(coin);
  return (
    <div className={styles.container}>
      {loading ? (
        <RotatingLines strokeColor="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {coin.map((item) => (
              <TableRow coin={item} key={item.id} currency={currency} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
