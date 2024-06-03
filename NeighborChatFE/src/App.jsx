import { useState } from 'react'
import './App.css'
import Mainpage from "./pages/Mainpage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ "width": "inherit"}}>
      <Mainpage />
    </div>
  )
}

export default App
