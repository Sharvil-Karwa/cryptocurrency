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

const search1 = {
  width: "25rem",
  fontSize: "1.2rem"
}
const top = {
  margin: "1rem auto 3rem"
}
const cards = {
  // margin: "1rem",
  justifyContent: "center"
}
  return (
    <div>
      <div>
          <div style={top}>
            <center>
              <h1>Cryptocurrency List and Prices</h1>
              <form style={{position: "relative"}}>
                <input type="text" placeholder="Search (e.g. Mork)"  onChange={handlechange} style={search1} />
              </form>
            </center>
          </div>
          <div className="row" style={cards}>
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
