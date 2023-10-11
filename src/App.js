import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './pages/Demo';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>asdf</h1>}></Route>
        <Route path="/Demo" element={<Demo></Demo>}></Route>
        <Route path="pages/Login" element={<Login></Login>}></Route>
        <Route path="pages/Register" element={<Register></Register>}></Route>
      </Routes>
      <Link to="/Demo">데모 페이지 표시</Link>
      <p><Link to="/pages/Login">로그인 페이지 이동</Link></p>
    </div>
  );
}

export default App;
