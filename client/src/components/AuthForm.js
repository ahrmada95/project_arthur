import '../styles/AuthForm.css'
import { useState } from 'react'
const Authform = ({setIsLoginPop}) => {
    const [isSignUp, setIsSignUp] = useState(false)
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
        <form>

            {
                isSignUp&& <div id='signup-container'>
                 <input type='text' placeholder='First Name'/>
                 <input type='text' placeholder='Last Name'/>
                </div>
            }
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='password'/>
        
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