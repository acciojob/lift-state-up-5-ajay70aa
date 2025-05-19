
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // console.log(isLoggedIn)
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? 
          <p>You are logged in!</p>
        : 
        <div>
          <h1>Parent Component</h1>
          <Child setLogin={setIsLoggedIn}/>
        </div>
        }
        
    </div>
  )
}

export default App
