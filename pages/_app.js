import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

import { Loading } from "../components";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };

    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
