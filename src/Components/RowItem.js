function RowItem(props) {
  //props will have keys value pair
  //key of rowNumber, rowInstruction, rowAction

  //can only have 1 parent
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowIntsruction}</td>
      <td>{props.rowAction}</td>
    </tr>
  );
}

export default RowItem;
