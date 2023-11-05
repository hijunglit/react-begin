import { useState, useEffect } from "react";

function Crypto() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [assets, setAssets] = useState(0);
  const [selected, setSelected] = useState("");
  const onChange = (event) => {
    setAssets(event.target.value);
  };
  const selectCoin = (event) => {
    setSelected(event.target.value);
    const strData = event.target.value;
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
        <select onChange={selectCoin}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name}({coin.symbol}) : $ {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {loading ? (
        ""
      ) : (
        <label htmlFor="assets">
          Assets:
          <input
            id="assets"
            value={assets}
            onChange={onChange}
            type="number"
            required
          />
        </label>
      )}
      {assets ? (
        <div>
          <h1>You have a {assets}$.</h1>
          <h3>
            {selected ? `You selected ${selected}.` : `You're not selected yet`}{" "}
          </h3>
        </div>
      ) : (
        <h1>Please enter your own assets</h1>
      )}
    </div>
  );
}

export default Crypto;
