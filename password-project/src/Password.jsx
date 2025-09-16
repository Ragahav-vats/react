import React, { useState } from 'react'

export default function password() {

    const [showPassword, setshowPassword] = useState(0);

    const hide = () => {
        setshowPassword(!showPassword);
    }

  return (
    <>
      <div>
        <input type={showPassword==1 ? 'text' :  'password'} placeholder='Enter your password' />


        <button onClick={hide}>{showPassword==1 ? 'Hide Password' : 'Show Password'}</button>
      </div>
    </>
  )
}
