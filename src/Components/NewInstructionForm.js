import React, { useState } from "react";
//state captures change and rerenders page

function NewInstructionForm() {
  //starts off empty, then gets letters added-------------p[0]
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  /*
  const descriptionChange = (event) => {
    console.log("desc: " + event.target.value);
    setDescription(event.target.value);
  };

  const assignChange = (event) => {
    console.log("assign: " + event.target.value);
    setAssigned(event.target.value);
  };
  */

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
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
        <button type="button" className="btn btn-primary mt-3">
          Add Instruction
        </button>
      </form>
    </div>
  );
}

export default NewInstructionForm;
