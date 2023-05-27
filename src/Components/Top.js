import React from "react"

export default function Top(){
    return (
        <div className = "Top">
            
            <img className = "profpic" src = "./img.jpg" />
            <h2> Pratham Dhiman </h2>
            <p> Frontend Developer </p>
            <a href = "https://scrimba.com/scrim/co05d4ef6845f05d9a68e4e97"> dhiman.website </a>
            <div>
                <button> 
                    <img src = "./Button.png" />
                </button>
                <button> 
                    <img src = "./Linkedin.png" />
                </button>
            </div>
        </div>
    )
}