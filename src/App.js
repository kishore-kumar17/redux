import "./App.css";
import Add from "./redux/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./redux/View";
import Edit from "./redux/Edit";
import Counter from "./toolkit/Counter";
import Create from "./redux crud/Create";
import Viewcrud from "./redux crud/Viewcrud";
import Editcrud from "./redux crud/Editcrud";
import Home from "./socket io/Home";
import Chatroom from "./socket io/Chatroom";
import React from "react";
import Counterr from "./test case/CounterApp";

// import Pages from "./Pages";
// react lazyloading

const Lazypart = React.lazy(() => import("./Pages.js"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Pages />}></Route> */}

          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <h1 style={{ color: "blue" }}>LOADING pleace wait.....</h1>
                }
              >
                <Lazypart />
              </React.Suspense>
            }
          ></Route>

          <Route path="/add" element={<Add />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/crud" element={<Create />}></Route>
          <Route path="/viewcrud" element={<Viewcrud />}></Route>
          <Route path="/editcrud/:id" element={<Editcrud />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/:roomId" element={<Chatroom />}></Route>
          <Route path="/test" element={<Counterr />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
