import React from 'react'
import CloudElement from './CloudElement.js'

const CloudRow = (props) => {

  const elements = props.words.map((word, index) => {
    return(
      <CloudElement word={word} size={props.size[word]} key={index} className="CloudElement"/>)
    })

  return(
      <tr>
        { elements }
      </tr>
  )
}

export default CloudRow;
