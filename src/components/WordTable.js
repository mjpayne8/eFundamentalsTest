import React from 'react'
import TableRow from './TableRow.js'

const WordTable = (props) => {

  const rowElements = Object.keys(props.wordObject).map((key, index) => {
    return(<TableRow word={key} count={props.wordObject[key]} key={index} className="TableRow"/>)
    })

  return(
    <table>
      <tbody>
        <tr>
          <th> Word </th>
          <th> Frequency </th>
        </tr>
        { rowElements }
      </tbody>
    </table>
  )
}

export default WordTable;
