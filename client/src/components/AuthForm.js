import '../styles/AuthForm.css'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
const Authform = ({setIsLoginPop}) => {
    const {globalUser, setGlobalUser} = useContext(UserContext)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formInput, setFormInput] = useState({})

        const authenticateUser = async() => {
            let req = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(formInput)
            })
            let res = await req.json()
            if (req.ok){
                console.log(res)
                setGlobalUser({first_name: res.first_name, last_name: res.last_name, email: res.email})
                setIsLoginPop(false)
            }

        }

    const handleChange = (key, value) => {
        setFormInput({
            ...formInput,
            [key]: value
        })
    }

    console.log(formInput)
return (
    <div id='auth-bg' onClick={()=> {setIsLoginPop(prev => !prev); }}>
        <div id='auth-form' onClick={(e) => {e.stopPropagation()}}> 
        <h1>{isSignUp? 'Sign Up' : 'Sign In'}</h1>
        <button className='fb hover-auth'>Continue with Facebook</button>
        <button className='g hover-auth'>Continue with Google</button>
        <button className='a hover-auth'>Continue with Apple</button>
        <div id='divider'>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <form onSubmit={(e)=> {e.preventDefault(); authenticateUser()}}>

            {
                isSignUp&& <div id='signup-container'>
                 <input type='text' name='first_name' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} placeholder='First Name'/>
                 <input type='text' name='last_name' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} placeholder='Last Name'/>
                </div>
            }
        <input type='email' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} name='username' placeholder='Email' />
        <input type='password' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} name='password' placeholder='password'/>
        
        <button className='continue hover-auth' >Continue</button>
        </form>
        {isSignUp? null :
         <div id='forgot-pword'>
         <input  id='check' type='checkbox'/>
         <label htmlFor='check' className='check'>Remember Me</label>
         <a>Forgot Password?</a>
         </div>
        }
        <hr/>
        <div id='join'>
            <p>{isSignUp? 'Have an Account?':'Not a member yet?'}</p>
            <a onClick={()=> {setIsSignUp(prev => !prev)}}>{isSignUp? 'Login': 'Join now'}</a>
        </div>
    </div>
    </div>
)
}


export default Authform