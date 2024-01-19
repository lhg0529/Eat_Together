import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ETMain from './pages/ETMain';
import ETSearch from './pages/ETSearch';
import ETSearchplace from './pages/ETSearchplace';
import MyPage from './pages/MyPage';
import ETRVInfo from './pages/ETRVInfo';
import RoomInfo from './pages/RoomInfo';
import { useEffect } from 'react';

function App() {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (localUser) {
      navigate('/ETMain');
    } else {
      navigate('/Login');
    }
  }, []);
  return (
    <div className="App">
      <div className="inner">
        <Routes>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/ETMain" element={<ETMain />}></Route>
          <Route path="/ETSearch" element={<ETSearch />}></Route>
          <Route path="/ETSearch/:key1" element={<ETSearchplace />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/ETRVInfo" element={<ETRVInfo />}></Route>
          <Route path="/Roominfomation/:key1" element={<RoomInfo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
