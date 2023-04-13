import React, { useState } from "react";
//state captures change and rerenders page

//passing in props
function NewInstructionForm(props) {
  //starts off empty, then gets letters added-------------p[0]
  const [description, setDescription] = useState("");
  const [action, setAction] = useState("");

  const submitNewInstruction = () => {
    if (description !== "" && action !== "") {
      props.addStep(description, action);
      setDescription("");
      setAction("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Action</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAction(e.target.value)}
            value={action}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitNewInstruction}
        >
          Add Instruction
        </button>
      </form>
    </div>
  );
}

export default NewInstructionForm;

//removed these from above
/*
  const descriptionChange = (event) => {
    console.log("desc: " + event.target.value);
    setDescription(event.target.value);
  };

  const actionChange = (event) => {
    console.log("action: " + event.target.value);
    setAction(event.target.value);
  };
  */
