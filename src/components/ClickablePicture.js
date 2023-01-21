import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'

function ClickablePicture(props) {
    const firstImage = `./../${props.img}`
    const secondImage = `./../${props.imgClicked}`
    const [image, setImage] = useState(firstImage)

    function clickableImage() {
         setImage(secondImage) 
    }
  return (
    <>
        <img onClick={clickableImage} src={image}/>
    </>
  )
}


export default ClickablePicture