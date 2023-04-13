function RowItem(props) {
  //props will have keys value pair
  //key of rowNumber, rowInstruction, rowAction

  //CHILD of instruction table

  //can only have 1 parent
  return (
    <tr onClick={() => props.deleteStep(props.rowNumber)}>
      <th scope="row">Step {props.rowNumber}</th>
      <td>{props.rowIntsruction}</td>
      <td>{props.rowAction}</td>
    </tr>
  );
}

export default RowItem;
