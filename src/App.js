import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import InstructionTable from "./Components/InstructionTable";
import NewInstructionForm from "./Components/NewInstructionForm";

function App() {
  //given steps in a function
  const [steps, setSteps] = useState([
    {
      rowNumber: "Step 1",
      rowIntsruction: "Find a recipe you love",
      rowAction: "Save link",
    },
    {
      rowNumber: "Step 2",
      rowIntsruction: "Open section",
      rowAction: "Paste link",
    },
    {
      rowNumber: "Step 3",
      rowIntsruction: "Click save",
      rowAction: "Enjoy :)",
    },
  ]);

  const addStep = () => {
    let stepNumber = steps.length;

    if (stepNumber > 0) {
      stepNumber++;
      const newStep = {
        rowNumber: `Step ${stepNumber}`,
        rowIntsruction: "New instruction",
        rowAction: "New action",
      };
      //adds new step and old steps
      setSteps((steps) => [...steps, newStep]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Table Below </div>
        <div className="card-body">
          <InstructionTable steps={steps /*send steps to Table}*/} />
          <button
            className="btn btn-primary"
            onClick={addStep} /*only when clicked, no ()*/
          >
            Add new step
          </button>
          <NewInstructionForm />
        </div>
      </div>
    </div>
  );
}

export default App;
