
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>hello</h1>
        <label htmlFor="name">Enter your name:</label>
        <br />
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        {name&&<h2>Hello {name}!</h2>}
    </div>

  
  )
}

export default App
