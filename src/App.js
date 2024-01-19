import React, { useState, useEffect } from 'react';
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

function App() {
  const [dbData, setDbData] = useState(null);
  const localUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    
       // db.json 데이터 불러오기 netlify에서 db.json 사용하기 위해서
       fetch('/db.json')
       .then(response => response.json())
       .then(data => setDbData(data))
       .catch(error => console.error('Error fetching data: ', error));
    
    if (localUser) {
      navigate('/ETMain');
    } else {
      navigate('/Login');
    }
  }, [navigate, localUser]);
  return (
    <div className="App">
      <div className="inner">
        <Routes>
        <Route path="/Login" element={<Login dbData={dbData} />}></Route>
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
