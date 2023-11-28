
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Register2 from './components/register/Register2';
import Dorra from './components/Dorra/Dorra';
function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element ={<HomePage/>}/>
      <Route path='/dorra' element ={<Dorra/>}/>

      <Route path='/register' element = {<Register2/>}/>
      <Route path='/login' element = {<Login/>}/>
    <Route path='/app/privateRoute' element = {<PrivateRoute/>}/> 
     </Routes>


    </div>
  );
}

export default App;
