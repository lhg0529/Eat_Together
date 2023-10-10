import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './pages/Demo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>asdf</h1>}></Route>
        <Route path="/Demo" element={<Demo></Demo>}></Route>
      </Routes>
      <Link to="/Demo">데모 페이지 표시</Link>
    </div>
  );
}

export default App;
