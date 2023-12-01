import React from "react"
import memesData from "../data/MemesData.json"

export default function Meme() {
    
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src = {memeImage} alt="" className="meme--image" />
        </main>
    )
}