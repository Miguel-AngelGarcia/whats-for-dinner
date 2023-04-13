import RowItem from "./RowItem";

function InstructionTable(props) {
  return (
    <table className="table table hover">
      <thead>
        <tr>
          <th scope="col">Step</th>
          <th scope="col">Instruction</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.steps.map((steps) => (
          <RowItem
            //need a key for react
            key={steps.rowNumber}
            rowNumber={steps.rowNumber}
            rowIntsruction={steps.rowIntsruction}
            rowAction={steps.rowAction}
            deleteStep={props.deleteStep}
          />
        ))}
      </tbody>
    </table>
  );
}

export default InstructionTable;
