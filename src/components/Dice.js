import React from 'react'
import { useState } from 'react'
import empytyDice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice()  {
    const [img, setIMG] = useState(empytyDice);
    const dices = [ dice1, dice2, dice3, dice4, dice5, dice6 ]

    function randomize() {
        const randomNumber = Math.floor(Math.random() * (6 - 0) + 0);
        const randomDice = dices[randomNumber];
        setTimeout(() => {
          setIMG(randomDice)
        }, 1000);
    }

  return (
    <div>
        <img onClick={randomize} src={img} style={{width: "60px"}}/>
    </div>
  )
}

export default Dice