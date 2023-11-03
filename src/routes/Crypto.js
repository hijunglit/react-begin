import { useState, useEffect } from "react";

function Crypto() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    const json = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCoins(json);
    setLoading(false);
  };
  useEffect(() => {
    getCoins();
  }, []);
  console.log(coins);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Crypto;
