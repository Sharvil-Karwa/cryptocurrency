import React from 'react'

const Coin = ({name,image,symbol,price,volume,change,market_cap,market_cap_rank}) => {

  const cardStyle={
      margin: "1rem",
      backgroundColor: "white"
  }
  const imgStyle = {
      height: "15rem",
      width: "15rem",
  }
  const right = {
      float: "right"
  }
  const left = {
      float: "left"
  }
  const element = {
      margin: "1rem",
      textAlign: "left"
  }
  const label = {
      fontWeight: "bold",
      color: "purple"
  }
  return (
    <div className='coin-container col-lg-3 card' style={cardStyle}>
    <center>
    <img className="card-img-top" src={image} alt="Card image cap" style={imgStyle}/>
    </center>
    <div className="card-body">
      <center>
      <h5 className="card-title">{name}</h5>
      </center>
      <div style={left}>
        <div style={element}>
            <label style={label}>Price</label>
            <p className='card-text'> ${price}</p>
        </div>
        <div style={element}>
            <label style={label}>Market Cap</label>
            <p className='card-text'> ${market_cap}</p> 
        </div>
      </div>
    <div style={right}>
        <div style={element}>
            <label style={label}>Price Change</label>
            {change<0?(<p className='red'>{change}%</p>):(<p className='green'>{change}%</p>)}
        </div>
            <div style={element}><label style={label}>Market Cap Rank</label>
            <p className='card-text'>{market_cap_rank}</p></div>
        </div>
    </div>
    </div>
  )
}

export default Coin

