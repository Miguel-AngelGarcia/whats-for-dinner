return (
  <div>
    <Navbar />
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Table Below </div>
        <div className="card-body">
          <InstructionTable
            steps={steps /*send steps to Table}*/}
            deleteStep={deleteStep}
          />
          <button
            onClick={() => setShowAddStepForm(!showAddStepForm)}
            className="btn btn-primary" /*only when clicked, no ()*/
            /*added ternery operator below to change when clicked*/
          >
            {showAddStepForm ? "Close new step" : "Add new step"}
          </button>
          {showAddStepForm /*conditional render */ && (
            <NewInstructionForm /*pass in function as a prop*/
              addStep={addStep}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);
