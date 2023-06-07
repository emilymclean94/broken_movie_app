import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import FriendDashboard from './pages/FriendDashboard';
import MyDashboard from './pages/MyDashboard';
import MovieAPI from './components/Movies/MovieAPI';

function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/yourdashboard' element={<FriendDashboard />} />
        <Route path='/mydashboard' element={<MyDashboard />} />
        <Route path='/movieapi' element={<MovieAPI />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

// delete please!!