import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './pages/Demo';
import Login from './pages/Login';
import Register from './pages/Register';
import ETMain from './pages/ETMain';
import ETSearch from './pages/ETSearch';
import ETSearchplace from './pages/ETSearchplace';
import ETRVInfo from './pages/ETRVInfo';

function App() {
  return (
    <div className="App">
      <div className="inner">
        <Routes>
          <Route path="/" element={<h1>asdf</h1>}></Route>
          <Route path="/Demo" element={<Demo></Demo>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/ETMain" element={<ETMain />}></Route>
          <Route path="/ETSearch" element={<ETSearch />}></Route>
          <Route path="/ETSearch/:key1" element={<ETSearchplace />}></Route>
          <Route path="/ETRVInfo" element={<ETRVInfo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
