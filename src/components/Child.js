import React from 'react'

const Child = (props) => {

  const handleClick = (e) => {
    e.preventDefault()
    props.setLogin(true)
  }
  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' />
        <button onClick={(e) => handleClick(e)}>Login</button>
      </form>
    </div>
  )
}

export default Child