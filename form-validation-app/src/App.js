import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password,setPassword] =useState('')
  const [email,setEmail]=useState('')
  const handleChange =(e)=>{
    e.preventDefault();
    if(username ===''){
      alert('name field is required')
    }
    else if(email===''){
      alert('email field is requird')
    }
    else if(!email.includes('@')){
      alert('please Enter valid email address')
    }
    else if(password === '' ){
      alert('password is required')
    }
 
    else if(password.length <=6){
      alert('please enter password max 6 letters')
    }
    else{
      if(username.length===0 && password.length ===0 && email.length===0 ){
        alert('invalid')
      }
     else{
      alert('successful  login')
     }
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleChange}>
      <div>
        <label>
          Username
        </label><br/>
        <input name='username' type='text' onChange={e=>setUsername(e.target.value)}/><br />
      </div>
      <div>
        <label>
          Email
        </label><br/>
        <input name='Email' type='text' onChange={e=>setEmail(e.target.value)}/><br />
      </div>
      <div>
        <label>
           Password
        </label><br/>
        <input type='password' name='password'  onChange={e=>setPassword(e.target.value)} /><br />
      </div><br/>
        <button style={{marginLeft:'55px'}}>submit</button>
      </form>
     
    </div>
  );
}

export default App;
