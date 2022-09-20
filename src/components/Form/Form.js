import React from 'react'
import './Form.css'
const Form = () => {
  return (
    
      <div className='formbody'> 
      <h1 className='heading'>Log in</h1>
      <form >
        <div className='labels' >
        
        <input type="text" placeholder='Enter your Name'/>
        
        <br/><br/><input type="password" placeholder='Enter your password'/>
        
        </div>
        
        
        

      </form>
      <button className='but' >Log in</button>
      </div> 
    
  )
}

export default Form
