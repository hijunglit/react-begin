import { useState, useEffect } from 'react';

function Crypto() {
    const [loading, setLoading] = useState();
    const getCoins = async() => {
        const json = (await fetch("https://api.coinpaprika.com/v1/tickers")).json();
        console.log(json);
    }
    useEffect(() => {
        getCoins();
    }, []);

    return (
        <h1>Hi! here is for crypto! We are coming soon!</h1>
    )
}

export default Crypto;