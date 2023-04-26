import "./App.css";
import React, { useState, useRef, useEffect } from "react";
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
import { Dropdown } from "./Components/Dropdown/Dropdown";

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [open, setOpen] = useState(false);

  const [cat, setCat] = useState("All");

  const childToParent = (childdata) => {
    setCat(childdata);
    console.log("in App", setCat);
  };

  useEffect(() => {
    console.log("cat cat cat", cat);
    console.log("length", cat.length);
  }, [cat]);

  return (
    <ThemeProvider theme={theme}>
      <div className="page">
        <>
          <div>
            <Navbar setCat={setCat} />
          </div>
          <div className="spacer">&nbsp;</div>
          <div className="main-body-wrapper">
            <Body sentCategory={cat} key={cat.length} />
          </div>
          <MonthlyMainstay />
          <div>
            <Footer />
          </div>
        </>
      </div>
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
