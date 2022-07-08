import React from "react";
import "./Image.css"
import foodImg from '../assets/food3.jpg'

const Image = () => {
    return <div className='image-container'>
        <img 
        src={foodImg}
        alt='img'
        />
    </div>
}

export default Image