import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {colors, CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import Home from "./pages/Home";
import Login from "../src/components/ModalsPages/LoginModal";
import SignUp from "./components/ModalsPages/SignUpModal";
import Feed from "./pages/Feed";
import MyDashboard from "./pages/MyDashboard";
import MovieSearch from "./pages/MovieSearch";
// import FriendDashboard from "./pages/FriendDashboard";
// import UserProfile from "./components/DashboardUser/UserProfile";
import Auth from './utils/auth';

const fontUrl = `@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital@1&display=swap");`;

const AppTheme = createTheme({
  palette: {
    background: {
      default: colors.grey[400],
    },
    primary: {
      main: colors.blue[500],
      light: colors.blue[300],
      dark: colors.indigo[800],
    },
    secondary: {
      main: colors.purple[500],
      light: colors.deepPurple[100],
      dark: colors.purple[800],
    },
    common: {
      black: "#000000",
      white: colors.grey[50],
      grey: colors.grey[400],
    },
    text: {
      common: colors.grey[50],
      },
    },
    style: {
      Card: {
        width: 300,
        margin: "auto",
      },
    },
    Media: {
      height: 550,
      width: "100%",
    },
    typography: {
      fontFamily: "Chakra Petch, sans-serif",
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
        '@import': fontUrl,
      },
    },
  },
});

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
    
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed />} />
            {/* <Route path="/yourdashboard" element={<FriendDashboard />} /> */}
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