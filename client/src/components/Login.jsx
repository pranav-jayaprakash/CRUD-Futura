import React,{useState} from 'react'
import { LoginData } from './Api'
import { Link } from 'react-router-dom'
import './Styles.css'
import { useDispatch } from 'react-redux'



const Login = () => {

  const dispatch = useDispatch()

    const [email , setemail] = useState('')
    const [password, setpassword] = useState('')

    const display=(e)=>{
        e.preventDefault()
        LoginData({
            email,password
        },dispatch)



    }
  return (
    <div>

        {/* <form onSubmit={display}>
        <input type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <input type="submit" />
        </form>


            

        <div>
            Dont have an account
        </div>

        </Link> */}

        <body>
    <header>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src='https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg' alt="" />
          </div>
          <div className="message">
            <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
        </div>
      </div>
      <div className="container">
      <form onSubmit={display}>
        <div className="form">
          <div className="email">
            <input type="text" placeholder="Email address or phone number" value={email} onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="password">
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          <div className="confirm">
            <button type='submit'>Log in</button>
          </div>
          <div className="forget">
            <a href="#" className="fgpass">Forgotten password?</a>
          </div>
          <div className="line"></div>
          <div className="newaccount">
          <Link to={'Signup'}>
            <button>Create new account</button>
          </Link>
          </div>

          
        </div>
        </form>
        <div className="page">
          <a href="#" className="createpage">Create a Page </a>
           for a celebrity, brand or business.
        </div>
      </div>
    </header>
    <footer>
      <div className="container">
        <div className="lang">
          <ul>
            <li>ภาษาไทย</li>
            <li>English (UK)</li>
            <li>日本語</li>
            <li>中文(简体)</li>
            <li>Tiếng Việt</li>
            <li>Français (France)</li>
            <li>Deutsch</li>
            <li>Русский</li>
          </ul>
        </div>
        <div className="langline"></div>
        <div className="link">
          <ul>
            <li>Sign Up</li>
            <li>Login</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Watch</li>
            <li>Places</li>
            <li>Forum</li>
            <li>Business</li>
            <li>Ad policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="copyright">
          <span>Facebook © 2023</span>
        </div>
      </div>
    </footer>
  </body>

    </div>
  )
}

export default Login