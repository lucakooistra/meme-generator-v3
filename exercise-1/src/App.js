function App() {
  const thingsArray = ["Thing 1", "Thing 2"]

  function addToArray() {
    const newThingText = `Thing ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    console.log(thingsArray)
  }

  const renderElement = thingsArray.map(thing => {
    return(
      <p key={thing}>{thing}</p>
    )
  })

  return (
      <div>
          <button onClick={addToArray}>Add Item</button>
          {renderElement}
      </div>
  )
}

export default App;
