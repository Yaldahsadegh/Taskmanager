import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateTask />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
