import React from 'react';

const TableRow = (props) => {

  return(
    <tr>
      <td><font size= {props.count}>{props.word}</font></td>
      <td>{props.count}</td>
    </tr>
  )
}

export default TableRow;
