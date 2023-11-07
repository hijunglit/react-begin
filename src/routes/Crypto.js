import { number } from 'prop-types';
import { useState, useEffect } from 'react';

function Crypto() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] = useState(0);
    const [selected, setSelected] = useState();
    const [price, setPrice] = useState();
    const [state, setState] = useState(false);

    async function getCoins() {
        const response = await fetch("https://api.coinpaprika.com/v1/tickers");
        const json = await response.json();
        setLoading(false);
        setCoins(json);
    }
    useEffect(() => {
        getCoins();
    }, [])
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const changeCoin = (event) => {
        let moneyAmount = event.target.value.split(":");
        moneyAmount[1] = parseFloat(moneyAmount[1].slice(2, -3));
        setSelected(moneyAmount[0]);
        setPrice(moneyAmount[1])
        setState(true);
    }
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : (
                <select onChange={changeCoin}>
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
                    {state ? <p>you can exchange <strong>"{selected}: ${amount / price} USD"</strong></p>  : ""}
                </div>
            )}

        </div>
    );
}

export default Crypto;