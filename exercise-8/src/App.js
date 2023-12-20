import React from 'react'
import boxes from "./data/boxes"
import Box from "./components/Box"

function App(props) {

  function toggle(id) {
    console.log(id)
  }

    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box
          key={square.id}
          id={square.id}
          on={square.on}
          handleClick={toggle} 
        />
      ))
      
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
