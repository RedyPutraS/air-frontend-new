import React from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

import { ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import { theme } from "utils/theme";

const queryClient = new QueryClient();

type AdditionalProps = {
  someProp: string;
  Component: any;
};

type CustomAppProps = AppProps & AdditionalProps;

function MyApp({ Component, pageProps }: CustomAppProps) {
  React.useEffect(() => {
    if (AOS) {
      AOS.init();
    }
  }, [AOS]);

  return (
    <>
      <Head>
        <title>ancora</title>
        <meta name="description" content="Ancora Indonesia Resources" />
        <link rel="icon" href="/images/logo/logo-small.png" />
      </Head>
      <main className={lexend.className}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default MyApp;
