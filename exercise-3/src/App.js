import React from "react"
import Count from "./components/Count"

function App() {

    const[count, setCount] = React.useState(0)

    function add(){
        setCount(prevCounting => prevCounting + 1)
    }
    
    function subtract(){
        setCount(prevCounting => prevCounting - 1)
    }

    console.log("App component rendered")

    return (
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>–</button>
          <Count 
          number = {count}
          />
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}


export default App;
