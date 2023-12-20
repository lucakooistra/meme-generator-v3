import React from "react";
import boxes from "./data/boxes";
import Box from "./components/Box";

function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares(prevSquares => {
      const newSquares = []
      for(let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i]
        if(currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        } 
        else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
