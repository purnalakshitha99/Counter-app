import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
