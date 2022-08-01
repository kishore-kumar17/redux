import "./App.css";
import Add from "./redux/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./redux/View";
import Edit from "./redux/Edit";
import Pages from "./Pages";
import Counter from "./toolkit/Counter";
import Create from "./redux crud/Create";
import Viewcrud from "./redux crud/Viewcrud";
import Editcrud from "./redux crud/Editcrud";
import Home from "./socket io/Home";
import Chatroom from "./socket io/Chatroom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route> 
          <Route path="/counter" element={<Counter />}></Route> 
          <Route path="/crud" element={<Create />}></Route> 
          <Route path="/viewcrud" element={<Viewcrud />}></Route> 
          <Route path="/editcrud/:id" element={<Editcrud  />}></Route>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/:roomId" element={<Chatroom />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
