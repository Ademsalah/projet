import React, { useEffect, useState } from 'react'
/* import "./StadiumCards.css"
 */import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchStadiums } from '../../../../api/admin/stadiumApi'
import { setStadium } from '../../../../redux/StadiumsSlice'
import { Link, useNavigate } from 'react-router-dom'
const StadiumCards = ({auth}) => {
  console.log('auth admin statdi ',auth)
 const Sstadium = useSelector(state=>state.StadiumsSlice)
    console.log('StadiumsSlice Sstadium',Sstadium._id)
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
  return (
    <>
 {
    Sstadium.map((el)=> (<>               
   
   <article className="card">
                <div className="card-header">
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
                <div className="card-body">
                  <p> {el.rating} ||  </p>
                </div>
              {
                auth ? (  <button className="card-footer">
                <a href=""> <Link to={`/zidstadium/${el._id}`}> uppdate</Link>  </a>
              </button>):(<button>view more </button>)
              }
              </article> 
   </>)   )
   } 
    
  </>
  
  )
}

export default StadiumCards
