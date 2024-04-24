import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import Navigation from "./components/Navigation";
import TaskView from "./components/TaskView";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateTask />}></Route>
          <Route path="/update/:id" element={<UpdateTask />}></Route>
          <Route path="/view/:id" element={<TaskView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
