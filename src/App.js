import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './pages/Demo';
import Login from './pages/Login';
import Register from './pages/Register';
import ETMain from './pages/ETMain';
import ETSearch from './pages/ETSearch';
import ETSearchplace from './pages/ETSearchplace';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>asdf</h1>}></Route>
        <Route path="/Demo" element={<Demo></Demo>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/ETMain" element={<ETMain />}></Route>
        <Route path="/ETSearch" element={<ETSearch />}></Route>
        <Route path="/ETSearch/:key1" element={<ETSearchplace />}></Route>
      </Routes>
      <Link to="/Demo">데모 페이지 표시</Link>
      <p><Link to="/Login">로그인 페이지 이동</Link></p>
    </div>
  );
}

export default App;
