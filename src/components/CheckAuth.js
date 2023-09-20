import React from 'react'
import { Navigate } from 'react-router-dom';

const CheckAuth = ({children}) => {
  let auth = localStorage.getItem('auth')
  
  if(auth){
    return children
  }else{
    return <Navigate to="/"/>
  }
}

export default CheckAuth