
import './App.css';
import Add from './redux/Add';
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
