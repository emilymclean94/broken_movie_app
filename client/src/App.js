import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Login from "../src/components/ModalsPages/LoginModal";
import SignUp from "./components/ModalsPages/SignUpModal";
import Feed from "./pages/Feed";
// import FriendDashboard from "./pages/FriendDashboard";
import MyDashboard from "./pages/MyDashboard";
import UserProfile from "./components/DashboardUser/UserProfile";
import MovieSearch from "./pages/MovieSearch";
import {CssBaseline, ThemeProvider} from "@mui/material";
import ResponsiveTheme from "./theme";
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';


const httpLink = createHttpLink({
  uri: '/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();


  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// linearGradient(90deg, rgba(2,0,36,1) 0%, rgb(37, 37, 173) 35%, blue 100%)


function App() {
  return (
    
    <ThemeProvider theme={ResponsiveTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>

      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed />} />
            <Route path="/yourdashboard" element={<FriendDashboard />} />
            <Route path="/me" element={<MyDashboard />} />
            <Route path="/mydashboard" element={<MyDashboard />} />
            <Route path="/moviesearch" element={<MovieSearch />} />
          </Routes>
        </Router>

      </ApolloProvider>
    </ThemeProvider>

  );
}

export default App;

// delete