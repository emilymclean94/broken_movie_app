import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import FriendDashboard from './pages/FriendDashboard';
import MyDashboard from './pages/MyDashboard';
import MovieAPI from './components/Movies/MovieAPI';
import Login from '../src/components/ModalsPages/LoginModal';
import Signup from './components/ModalsPages/SignUpModal';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed />} />
            <Route path="/yourdashboard" element={<FriendDashboard />} />
            <Route path="/mydashboard" element={<MyDashboard />} />
            <Route path="/moviesearch" element={<MovieSearch />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;