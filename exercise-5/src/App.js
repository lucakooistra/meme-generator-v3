import React from 'react'
import {useState} from 'react'

function App() {
  /**
   * Challenge: See if you can do it all again by yourself :)
   */

  const [thingsArray, setThingsArray] = useState(["Thing 1", "thing 2"])
  
  function addItem() {
      setThingsArray(newThingArray => {
        return ([...newThingArray,`Thing ${newThingArray.length + 1}`])
      })
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
      <div>
          <button onClick = {addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}

export default App;
