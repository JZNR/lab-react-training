import React from 'react'

function NumbersTable(props) {
    const limit = props.limit;
    const numbersList = [];
    for(let i = 0; i <= limit; i++) {
      numbersList.push(i);
    };

  return (
    <table>
        <tr>
        {numbersList.map(number => {
          return (
            <td 
            style={{
              backgroundColor: number % 2 === 1 ? "red" : "white",
              width: "50px",
              }}>
              {number}
            </td>
          )
        })}
        </tr>
    </table>
  )
}

export default NumbersTable