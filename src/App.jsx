import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Todo from "./component/Todo";

function App() {
  return (
   
      <div className="bg-[#1A1A1A] h-screen ">
        <Header />
        <Todo />
        <List />
      </div>
  
  );
}

export default App;
