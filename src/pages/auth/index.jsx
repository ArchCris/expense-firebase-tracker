import './auth.css'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Auth = () => {

  const navigate = useNavigate()

  const now = new Date()

  const signWithGoogle = async () =>{
  
    const result =  await signInWithPopup(auth,provider)
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL, 
      isAuth: true,
      expiry: now.getTime(),
    }
    localStorage.setItem('auth',JSON.stringify(authInfo))
    navigate('/expense-tracker')
  }

  const check = () =>{
    console.log('aca',localStorage.getItem('auth'))
  }

  useEffect(() => {
    check()
  }, []);

  return (
    <div className='auth__conteiner'>
      <div className='auth__card'>
        <h3>Sign in with google</h3>
        <button onClick={signWithGoogle}>Sign</button>
      </div>
    </div>
  )
}

export default Auth