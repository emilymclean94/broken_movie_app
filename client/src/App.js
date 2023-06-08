import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Login from "../src/components/ModalsPages/LoginModal";
import Signup from "./components/ModalsPages/SignUpModal";
import Feed from "./pages/Feed";
import FriendDashboard from "./pages/FriendDashboard";
import MyDashboard from "./pages/MyDashboard";
import MovieAPI from "./pages/Movies/MovieAPI";
import {colors, createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});


const theme= createTheme({
  palette:{
  background: {
    default: "linearGradient(90deg, rgba(2,0,36,1) 0%, rgb(37, 37, 173) 35%, primary.main 100%)"},
    text:{
      common: white},
    primary:{
      main: colors.blue[500],
      light: colors.blue[300],
      dark: colors.indigo[800],
  },
  secondary:{
    main: colors.purple[500],
    light: colors.deepPurple[100],
    dark: colors.purple[800],
  },
  common:{
    black: "#000000",
    white: colors.grey[50],
    grey: colors.grey[400],
  },
  },
  style:{Card: {
  width: 300,
  margin: "auto"
},
  },
Media: {
  height: 550,
  width: "100%"
},
Typography:{
  fontFamily: "Bebas Neue, sans-serif",
},
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>

      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/feed" element={<Feed />} />
            <Route path="/yourdashboard" element={<FriendDashboard />} />
            <Route path="/mydashboard" element={<MyDashboard />} />
            <Route path="/movieapi" element={<MovieAPI />} />
          </Routes>
        </Router>

      </ApolloProvider>
    </ThemeProvider>

  );
}

export default App;