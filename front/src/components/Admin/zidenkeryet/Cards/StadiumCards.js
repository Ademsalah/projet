import React, { useEffect, useState } from 'react'
 /* import "./StadiumCards.css" */
 import "./Btn.css" 
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletStadiums, fetchStadiums } from '../../../../api/admin/stadiumApi'
import { setStadium } from '../../../../redux/StadiumsSlice'
import { Link, useNavigate } from 'react-router-dom'
const StadiumCards = ({auth}) => {
  console.log('auth admin statdi ',auth)
 const Sstadium = useSelector(state=>state.Stadiums)
    console.log('StadiumsSlice Sstadium Sstadium',Sstadium)
const dispatch = useDispatch()
const navigate=useNavigate()


const getAllSstadium = async()=>{
  const data = await fetchStadiums()
    console.log('data jeyamil data base',data.stadiums)
    dispatch(setStadium(data.stadiums))
}

useEffect(()=>{
  getAllSstadium()
},[])

const update=()=>{
  navigate(`/zidstadium/${Sstadium._id}`)
  console.log(Sstadium);
}
const del=async(id)=>{
  await deletStadiums(id);
  getAllSstadium()
}
  return (
    <>
 {
    Sstadium.map((el)=> (<>               
   
   <article className="cardSstadium"  style={{border:"1px solid black",backgroundColor:"#686b87"}}>
                <div className="cardSstadiumheader">
                  <div>
                    <span>
                    <img src={el.postUrl} />
                  </span>
                  <h3> {el.name} </h3> 
                  </div>
                  <label className="toggle">
                  <input type="checkbox" defaultChecked="" />
                  <span />
                  </label>
                </div>
                <div className="cardSstadiumbody">
                  <p> {el.rating} ||  </p>
                </div>
 <div  style={{display:"flex",justifyContent:"space-around",margin:"-5px"}} >
 <button><Link to={`/zidstadium/${el._id}`}> update ?</Link></button>
  <button  onClick={()=>del(el._id)}  >remove</button>
 </div>
   </article> 
   </>)   )
   } 
    
  </>
  
  )
}

export default StadiumCards
