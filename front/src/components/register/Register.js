import React,{useState} from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import { postauthUser } from '../../api/authuser'
const Register = () => {

  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate = useNavigate()
  const login=async(value)=>{
    try{
      await postauthUser(value)
      console.log('login=>')
    navigate('/login')
    }catch(err){
      console.log(err)
      alert("ertyuio")
    }
  }
  return (
    <div className='bodyRegister'>
    <div className="containerR">
  <div className="text">Contact us Form</div>
  <form action="#">
    <div className="form-row">
      <div className="input-data">
        <input type="text" id="username" tabIndex={0} value={name} onChange={(e=>setName(e.target.value))} />
        <div className="underline" />
        <label htmlFor="">First Name</label>
      </div>
      <div className="input-data">
        <input type="text" id="username" value={lastName} onChange={(e=>setLastName(e.target.value))}  tabIndex={0}  />
        <div className="underline" />
        <label htmlFor="">Last Name</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="email" id="email" tabIndex={0}  value={email} onChange={(e=>setEmail(e.target.value))}/>
        <div className="underline" />
        <label htmlFor="">Email Address</label>
      </div>
      <div className="input-data">
        <input type="password" id="password"  value={password} onChange={(e=>setPassword(e.target.value))}/>
        <div className="underline" />
        <label htmlFor="">password</label>
      </div>
    </div>
    
  </form>
</div>
</div>
  )
}

export default Register


