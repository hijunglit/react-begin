import { useEffect, userEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState([]);
  const [coins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setConins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
