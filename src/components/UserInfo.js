import '../styles/UserInfo.css'
import { useGetUserInfo } from '../hooks/useGetUserInfo' 
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {

  const navigate = useNavigate()

  const {name, profilePhoto} = useGetUserInfo()

  const handleLogout = async () => {
    await signOut(auth)
    localStorage.clear()
    navigate('/')
  }


  return (
    <div className='userInfo__conteiner'>
      <div className='userInfo__card'>
        <img src={profilePhoto} alt='user logo'></img>
        <h4>{name}</h4>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserInfo