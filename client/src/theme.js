import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "@mui/material";

const fontUrl = `@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital@1&display=swap");`;

const theme = createTheme({

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

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
