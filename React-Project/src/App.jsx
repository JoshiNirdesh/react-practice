import { useState } from "react";

import "./App.css";

import Header from "./component/Header";
import Entry from "./component/Entry";
import data from "./component/data";

function App() {
  return (
    <>
      <Header />

      {data.map((data) => (
        <Entry key={data.id} data={data} />
      ))}
    </>
  );
}

export default App;
