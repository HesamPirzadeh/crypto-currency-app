import React, { useEffect, useState } from "react";
import { search } from "../services/cryptoAPI";
import { RotatingLines } from "react-loader-spinner";

import styles from "../css/Search.module.css";

function Search({ currency, setCurrency }) {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!input) {
      setLoading(false);
      return;
    }

    const searching = async () => {
      try {
        const fetchSearch = await fetch(search(input), {
          signal: controller.signal,
        });
        const json = await fetchSearch.json();
        console.log(json);
        if (json.coins) {
          setCoins(json.coins);
          setLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };

    setLoading(true);
    searching();

    return () => controller.abort();
  }, [input]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        name=""
        id=""
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
     {(!!coins.length || loading) && ( <div className={styles.searchResult} >
        {loading && (
          <RotatingLines
            width="50px"
            height="50px"
            strokeColor="#3874ff"
            strokeWidth="2"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}  >
              <img src={coin.thumb} alt={coin.name}/>
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>)}
    </div>
  );
}

export default Search;
