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
        <Entry
          img={data.img}
          title={data.title}
          country={data.country}
          text={data.text}
        />
      ))}
    </>
  );
}

export default App;
