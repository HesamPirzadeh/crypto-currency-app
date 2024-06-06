const BASE_URL = "https://api.coingecko.com/api/v3";
const KEY_API = "CG-P6u7JkcVMBmB9AAemRUDDUju";

const fetchData = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=30&page=${page}&x_cg_demo_api_key=${KEY_API}`;
};

const search = (text) =>
  `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${KEY_API}`;

const marketChart = (coin) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;

  
export { fetchData, search, marketChart };
