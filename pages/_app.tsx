import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "@/components/layout";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Head>
        <title>Hacker news</title>
        <meta name="description" content="Nextjs Hacker news app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
