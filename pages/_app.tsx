import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { config } from "@fontawesome/fontawesome-svg-core";
// config.autoAddCss = false;

export let theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
