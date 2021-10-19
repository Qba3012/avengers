import "../styles/globals.css";
import "../styles/gallery.css";
import type { AppProps } from "next/app";
import { createTheme as createMuiTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { MarvelContextProvider } from "../store/marvel-context";

const palette = {
  palette: {
    primary: {
      main: "#ED1D24",
      contrastText: "#fff",
    },
    secondary: {
      main: "#AFAFB1",
    },
  },
};

const muiTheme = createMuiTheme(palette);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <MarvelContextProvider>
        <Component {...pageProps} />
      </MarvelContextProvider>
    </MuiThemeProvider>
  );
}
export default MyApp;
