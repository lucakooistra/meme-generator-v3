import React from "react";
import jokesData from "./data/jokesData";
import Joke from "./components/Joke";

function App() {
  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
return (
    <div>
        {jokeElements}
    </div>
)
}

export default App;
