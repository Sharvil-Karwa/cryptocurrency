import React from 'react'

const Coin = ({name,image,price,change,market_cap,market_cap_rank}) => {
  const card = {
      margin: "1rem"
  }
  const cardContent = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "0.5rem auto"
  }
  const content = {
      display: "flex",
      flexDirection: "column",
      margin: "1rem"
  }
  const img = {
      width: "15rem",
      height: "15rem"
  }
  return (
    <div className='coin-container col-lg-3 col-md-6 card' style={card}>
        <center><img className="card-img-top" src={image} alt="Card image cap" style={img}/></center>
        <div className="card-body">
            <center><h5 className="card-title">{name}</h5></center>
            <div style={cardContent}>
                <div style={content}>
                    <label className='label'>Price</label>
                    <p className='card-text'> ${price}</p>
                    <label className='label'>Market Cap</label>
                    <p className='card-text'> ${market_cap}</p> 
                </div>
                <div style={content}>
                    <label className='label'>Price Change</label>
                    {change<0?(<p className='red'>{change}%</p>):(<p className='green'>{change}%</p>)}
                    <label className='label'>Market Cap Rank</label>
                    <p className='card-text'>{market_cap_rank}</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coin

