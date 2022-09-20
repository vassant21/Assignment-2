import React from 'react'
import './card.css'
const card = ({name,price,image}) => {
  return (
    <div className='card'>
      <div className='imgcont'>
        <img src={image} className='img' alt="" />
      </div>

      <div className='cardbody'>
            <div className='info'>
            <h3> {name} </h3>
            <h4> Price: {price}</h4>
            </div>
           
      </div>

    </div>
  )}
export default card
