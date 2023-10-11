import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './pages/Demo';
import ETMain from './pages/ETMain';
import ETSearch from './pages/ETSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>asdf</h1>}></Route>
        <Route path="/ETMain" element={<ETMain />}></Route>
        <Route path="/ETSearch" element={<ETSearch />}></Route>
      </Routes>
      <Link to="/ETMain">데모 페이지 표시</Link>
    </div>
  );
}

export default App;
