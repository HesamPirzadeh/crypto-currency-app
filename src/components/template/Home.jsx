import React, { useState } from "react";
import { useEffect } from "react";
import TableCoin from "../module/TableCoin";
import { fetchData, marketChart } from "../services/cryptoAPI";
import Pagination from "../module/Pagination";
import Search from "../module/Search";
import Chart from "../module/Chart";



function Home() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [currency,setCurrency] = useState("usd")
  const [chart,setChart] = useState(null)
 
 

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const url = await fetch(fetchData(pagination,currency));
      const json = await url.json();
      setCoin(json);
      setLoading(false);
    };
    getData();
  }, [pagination,currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coin={coin} loading={loading} currency={currency} setChart={setChart} />
      <Pagination pagination={pagination} setPagination={setPagination} />
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  );
}

export default Home;
