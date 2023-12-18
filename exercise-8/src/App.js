import React from 'react'
import boxes from "./boxes"

function App() {
  const [squares, setSquares] = React.useState(boxes)
    
  const squareElements = squares.map(square => (
      <div className="box" key={square.id}></div>
  ))
  return (
      <main>
          {squareElements}
      </main>
  )
}

export default App;
