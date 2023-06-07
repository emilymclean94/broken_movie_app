import  React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import FriendDashboard from "./pages/FriendDashboard";
import MyDashboard from "./pages/MyDashboard";
import MovieAPI from "./pages/Movies/MovieAPI";
import Login from "../src/components/ModalsPages/LoginModal";
import Signup from "./components/ModalsPages/SignUpModal";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feed" element={<Feed />} />
        <Route path="/yourdashboard" element={<FriendDashboard />} />
        <Route path="/mydashboard" element={<MyDashboard />} />
        <Route path="/movieapi" element={<MovieAPI />} />
      </Routes>
    </div>
  </Router>
  </ApolloProvider>
  );
}

export default App;

// delete please!!