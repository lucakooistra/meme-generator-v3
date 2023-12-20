import React from 'react'
import boxes from "./data/boxes"
import Box from "./components/Box"

function App(props) {

  function toggle() {
    console.log("Clicked!")
  }

    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box
          handleClick={toggle} 
          key={square.id}
          on={square.on}
        />
      ))
      
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
