import { useState, useEffect } from "react";

function Crypto() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [assets, setAssets] = useState(null);
  const onChange = (event) => {
    const enterAssets = event.target.value;
    setAssets(enterAssets);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
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
      {loading ? (
        ""
      ) : (
        <form onSubmit={onSubmit}>
          <label>
            Assets:
            <input
              onChange={onChange}
              type="number"
              placeholder="Enter your assets"
              required
            />
          </label>
          <input type="submit" placeholder="Submit" />
        </form>
      )}
    </div>
  );
}

export default Crypto;
