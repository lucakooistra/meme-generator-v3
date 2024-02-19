import React from "react"
import memesData from "../data/MemesData.json"
import { useId } from "react"

export default function Meme() {
    const id = useId

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

  
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function setText(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({ 
                ...prevMeme,
                [name]: value
        }))
    }
    console.log(meme)

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    id={id + "-topText"}
                    value={meme.topText}
                    onChange={setText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    id={id + "-bottomText"}
                    value={meme.bottomText}
                    onChange={setText}
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}