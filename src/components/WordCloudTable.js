import React from 'react'
import CloudRow from './CloudRow.js'

const WordCloudTable = (props) => {

  const rowElements = props.words.map((element, index) => {
    return(
      <CloudRow words={element} size={props.wordObject} key={index} className="CloudRow"/>)
    })

  return(
    <table>
    <tbody>
        { rowElements }
    </tbody>
    </table>
  )
}

export default WordCloudTable;
