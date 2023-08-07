import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Toaster } from "react-hot-toast";

import { Home } from "./pages/Home";
import { SingleHabit } from "./pages/SingleHabit";
import { Archive } from "./pages/Archive";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/habit/:habitId" element={<SingleHabit />} />
      </Routes>
    </div>
  );
}

export default App;
