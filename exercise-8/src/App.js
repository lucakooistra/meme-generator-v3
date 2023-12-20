import React from 'react'
import boxes from "./boxes"

function App() {

    const [squares, setSquares] = React.useState(boxes)

    const emptySquare = squares.map(square => {
      return (
        <div className='box' key={square.key}></div>
      )
    })
  return (
    <main>
      {emptySquare}
    </main>
  )
}

export default App;
