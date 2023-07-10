import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import ToDo from "./components/ToDo/Todo";

function App() {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
}

export default App;
