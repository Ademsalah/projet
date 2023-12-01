import React, { useState } from 'react'
import "./StadiumCards.css"

import {Stadium} from '../../../Data/Stadium'
const StadiumCards = () => {

    const [Sstadium,SetSstadium]=useState(Stadium)
    console.log('Sstadium',Sstadium)
  return (
    <>
   {
    Sstadium.map((el)=> (<>    <article className="tile">
    <div className="tile-header">
      <i className="ph-lightning-light"  />
      <h3>
        <span style={{color:"black"}} >{el.name} </span>
        <span>{el.price}</span>
        <span>{el.rating}</span>
      </h3>
    </div>
    <a href="#">
      <span>Go to service</span>
      <span className="icon-button">
        <i className="ph-caret-right-bold" />
      </span>
    </a>
  </article></>)   )
   }
    
  </>
  
  )
}

export default StadiumCards
