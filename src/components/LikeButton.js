import React from 'react'
import { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("red")

    function incrementCounter() {
        const colors = ['purple','blue','green','yellow','orange','red'];
        const randomColor = colors[Math.floor(Math.random() * (5 - 0) - 0)]
        setCounter(counter + 1);
        setBackgroundColor(randomColor);
    }

  return (
    <button onClick={incrementCounter} style={{backgroundColor: backgroundColor}}>{counter} likes</button>
  )
}

export default LikeButton