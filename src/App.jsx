import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/component/Header";
import Todo from "./assets/component/Todo";

function App() {
  return (
    <div>
        <Header />
          <Todo/>     
    </div>
  );
}

export default App;
