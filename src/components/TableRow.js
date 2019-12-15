import React from 'react';

const TableRow = (props) => {

  return(
    <tr>
      <td>{props.word}</td>
      <td>{props.count}</td>
    </tr>
  )
}

export default TableRow;
