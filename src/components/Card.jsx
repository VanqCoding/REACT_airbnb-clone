import React from 'react'
import star from '/public/images/star.png'

const Card = (props) => {
  let badgeText

  if(props.openSpots === 0)
  {
    badgeText = "SOLD OUT"
  } 
  else if (props.location === "Online")
  {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>

      {badgeText && <div className='card--badge'>{badgeText}</div>}
      
      <img className='card--image' src={`/public/images/` + props.coverImg} alt="" />
      
      <div className='card--stats'>
        <img className='card--star' src={star} alt="" />
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>

      <p className='card--title'>{props.title}</p>
      <p className='card--price'>From $ {props.price}</p>

    </div>
  )
}

export default Card