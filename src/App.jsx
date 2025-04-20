import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "../src/assets/style.css";
import Header from "./Components/Header/Header";
import AllFoodItems from "./Components/AllFoodItems/AllFoodItems";
function App() {
  return (
    <>
      <div className="all-container">
        <Header />
        <AllFoodItems />
      </div>
    </>
  );
}

export default App;
