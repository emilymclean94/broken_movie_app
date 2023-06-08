import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Login from "../src/components/ModalsPages/LoginModal";
import SignUp from "./components/ModalsPages/SignUpModal";
import Feed from "./pages/Feed";
import FriendDashboard from "./pages/FriendDashboard";
import MyDashboard from "./pages/MyDashboard";
import MovieSearch from "./pages/Movies/MovieSearch";
import {colors, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import UserProfile from "./components/DashboardUser/UserProfile";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// linearGradient(90deg, rgba(2,0,36,1) 0%, rgb(37, 37, 173) 35%, blue 100%)
const theme= createTheme({
  palette:{
  background: {
    default: "colors.grey[400]"},
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
    text:{
      common: colors.grey[50],},
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
  fontFamily: "Chakra Petch, sans-serif",
},
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital@1&display=swap');
</style>
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