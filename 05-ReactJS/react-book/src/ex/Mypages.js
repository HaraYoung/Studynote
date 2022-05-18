import React from 'react';
import { Navigate } from 'react-router-dom';

const Mypages = () => {
    const isLogin= false;
    if(!isLogin) {
        return <Navigate to='/login' replace={true}/>
    }
  return (
    <div>Mypages</div>
  )
}

export default Mypages