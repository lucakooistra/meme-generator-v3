import React from "react"

function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function flipState(){
      setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={flipState}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

export default App;
