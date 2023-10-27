
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useState } from 'react';

function App() {
  const[Count,setCount]=useState(0);

  const increase=()=>{
    setCount(Count +1);
  };
  const decrease=()=>{
    setCount(Count -1);

  }
  const setToZero=()=>{
   setCount(0);
  };
  return (
    
    <div className='App'>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>SetToZero</button>
    </div>

   
  );
}

export default App;
