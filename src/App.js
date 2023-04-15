import "./App.css";
import React, { useState, useRef } from "react";
import InstructionTable from "./Components/InstructionTable";
import NewInstructionForm from "./Components/NewInstructionForm";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/global";
import { theme } from "./Components/theme";
import { Burger, Footer, Header, Menu } from "./Components";
import { useOnClickOutside } from "./Hooks/";
import { Carousel } from "./Components/Carousel/Carousel";
import { Body } from "./Components/Body/Body";
import { MonthlyMainstay } from "./Components/MonthlyMainstay/MonthlyMainstay";

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [open, setOpen] = useState(false);

  const [showAddStepForm, setShowAddStepForm] = useState(false);
  //given steps in a function
  const [steps, setSteps] = useState([
    {
      rowNumber: "1",
      rowIntsruction: "Find a recipe you love",
      rowAction: "Save link",
    },
    {
      rowNumber: "2",
      rowIntsruction: "Open section",
      rowAction: "Paste link",
    },
    {
      rowNumber: "3",
      rowIntsruction: "Click save",
      rowAction: "Enjoy :)",
    },
  ]);

  const addStep = (description, instruction) => {
    let rowNumber = 0;
    if (steps.length > 0) {
      let curr = Number(steps[steps.length - 1].rowNumber) + 1;
      console.log(curr);
      rowNumber = curr;
    } else {
      rowNumber = "1";
    }
    const newStep = {
      rowNumber: rowNumber,
      rowIntsruction: description,
      rowAction: instruction,
    };
    //adds new step and old steps
    setSteps((steps) => [...steps, newStep]);
  };

  const deleteStep = (deleteStepRowNumber) => {
    let filtered = steps.filter(function (value) {
      //remember.PROPERTY of value.
      return value.rowNumber !== deleteStepRowNumber;
    });
    setSteps(filtered);
    console.log(filtered);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          <Navbar />
        </div>
        <div>
          <Body />
        </div>
        <MonthlyMainstay />
        <div>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App; /*}

/*
return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div></div>
        <div ref={node}>
          <Burger
            open={open}
            setOpen={setOpen /*Burger & menu know about state now*/ /*
            />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Footer></Footer>
        </>
      </ThemeProvider>
    );
*/
