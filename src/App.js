import React,{useState, useEffect} from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {

  const [coins,setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=5&sparkline=false")
  .then(res=>{
    setCoins(res.data);
  })
  .catch(error => console.log(error));
},[]);

const handlechange = e =>{
  setSearch(e.target.value);
}

const filteredCoins = coins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase())
)

const center = {
  justifyContent: "center"
}
const search1 = {
  position: "absolute",
  top: "1%"
}
  return (
    <div className="coin-app">
      <div className="coin-search" style={search1}>
          <center>
          <h1 className="coin-text">
            Search a currency
          </h1>
          <form>
            <input type="text" placeholder="search" className="coin-input" onChange={handlechange} />
          </form>
          </center>
          <div className="row center" style={center}>
            {filteredCoins.map(coin =>{
              return(
                <Coin 
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol = {coin.symbol}
                volume={coin.market_cap} 
                price = {coin.current_price} 
                change={coin.price_change_percentage_24h}
                market_cap={coin.market_cap}
                market_cap_rank={coin.market_cap_rank}
                />
            )
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
