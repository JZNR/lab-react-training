import React, { useState } from 'react'

function Carousel(props) {
   const [counter, setCounter] = useState(0);
   const [img, setImg] = useState(props.images[counter])

    function swapLeft() {
        setCounter(counter - 1)
        setImg(props.images[counter])
        if(counter <= 0) {
            setCounter(0)
        }
    }

    function swapRight() {
        setCounter(counter + 1)
        setImg(props.images[counter])
        if(counter >= 3) {
            setCounter(3)
        }
    }

  return (
    <div>
        <img src={img}/>
        <button onClick={swapLeft}>Left</button>
        <button onClick={swapRight}>Right</button>
    </div>
  )
}

export default Carousel