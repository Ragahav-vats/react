import React from 'react'

export default function() {
  var status = 1;
  return (
    
    <div>
      <div style={{display:`${status == 1 ? 'none' : ''}`}}>Welcome</div>
    </div>
      
   
  )
}
