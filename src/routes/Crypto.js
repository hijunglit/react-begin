import { useState, useEffect } from 'react';

function Crypto() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] =useState(0);
    async function getCoins() {
        const response = await fetch("https://api.coinpaprika.com/v1/tickers");
        const json = await response.json();
        console.log(json);
        setLoading(false);
        setCoins(json);
    }
    useEffect(() => {
        getCoins();
    }, [])
    const onChange = (event) => {
        setAmount(event.target.value);

    }
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : (
                <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                        </option>
                    ))
                }
                </select>
            )}
            {loading ? "..." : (
                <div>
                    <form>
                        <label>
                            Please enter the exchange amount:
                            <input 
                                type='number'
                                value={amount}
                                onChange={onChange}
                            />
                        </label>
                    </form>
                    <strong>You entered exchange amount of ${amount}USD </strong>
                    <p>
                        you can get{coins[0].name} {coins[0].symbol}: {amount / coins[0].quotes.USD.price} bitcoins!
                    </p>
                </div>
            )}

        </div>
    );
}

export default Crypto;