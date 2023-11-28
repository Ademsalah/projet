import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postauthUser } from '../../api/authuser'
import Popup from 'reactjs-popup';
import './register2.css'

const Register2 = () => {
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate()
 
  
    const login = async (value) => {
      try {
        console.log('Login payload:', value); 
        await postauthUser(value);
        navigate('/login');
      } catch (error) {
        console.error('Login error:', error);
        setPopupOpen(true);
      }
    };
    
    const closePopup = () => {
      setPopupOpen(false);
    };
  return (
    <section className='bodysection'>
    <div className='bodyrr'>
    <div className="containerRegister">
    <h1>Register</h1>
    <h2>Create a new account</h2>
    <form >
    <div className="form-row">
      <div className="input-data">
        <input type="text" id="username" tabIndex={0} value={name} onChange={(e=>setName(e.target.value))} />
        <div className="underline" />
        <label >First Name</label>
      </div>
      <div className="input-data">
        <input type="text" id="username" value={lastName} onChange={(e=>setLastName(e.target.value))}  tabIndex={0}  />
        <div className="underline" />
        <label >Last Name</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="email" id="email" tabIndex={0}  value={email} onChange={(e=>setEmail(e.target.value))}/>
        <div className="underline" />
        <label >Email Address</label>
      </div>
      <div className="input-data">
        <input type="password" id="password"  value={password} onChange={(e=>setPassword(e.target.value))}/>
        <div className="underline" />
        <label >password</label>
      </div>
    </div>

    <div class="form-row submit-btn">

    <div className="input-data">
                  <div className="inner" >
                  <button type="button" onClick={()=>login({name,lastName,email,password})}  >submmiti </button>
                    {/* <input type="submit" onClick={()=>login({name,lastName,email,password})} value="submmiti"/> */}
                  {/* <input type="button" onClick={()=>navigate('/login')} value="3andek compte"/> */}
                  <button type="button" onClick={()=>navigate('/login')} >3andek compte </button>
                  </div>
               </div>
  </div>

    </form>
    <Popup open={isPopupOpen} onClose={closePopup} modal>
          <div>
            You entered the wrong password or email
            <a className="close" onClick={closePopup}>
              &times;
            </a>
          </div>
        </Popup>
  </div>

  </div>
  </section>
  )
}

export default Register2
