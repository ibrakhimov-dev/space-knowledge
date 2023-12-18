import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
        contrastText: "#fff",
        main: '#072556',
    },
    danger: {
        contrastText: "#fff",
        main: '#BC002D',
    },
    grey: {
        main: "#ccc"
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
});  

