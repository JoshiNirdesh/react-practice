import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  return (
    <>
      <Navbar />
      <News />
    </>
  );
}

export default App;
