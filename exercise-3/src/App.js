import React from "react"
function App() {

    const[number, counting] = React.useState(0)

    function add(){
        counting(number + 1)
    }

    function subtract(){
        counting(number - 1)
    }

    return (
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>–</button>
          <div className="counter--count">
              <h1>{number}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}


export default App;
