import "./App.css";
import Add from "./redux/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./redux/View";
import Edit from "./redux/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
