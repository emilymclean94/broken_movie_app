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
import Box from "@mui/material/Box";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const theme= createTheme({
    palette:{
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






// import Sidebar from "./components/Sidebar";
// import Feed from "./components/Feed";
// import Rightbar from "./components/Rightbar";
// import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Add from "./components/Add";
// import { useState } from "react";

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });
  
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box bgcolor={"background.default"} color={"text.primary"}>
//         <Navbar />
//         <Stack direction="row" spacing={2} justifyContent="space-between">
//         <Sidebar setMode={setMode} mode={mode}/>
//           <Feed />
//           <Rightbar />
//         </Stack>
//         <Add />
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default App;