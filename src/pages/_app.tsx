import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { fetcher } from "@/libs/http/swr/fetcher";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content="XSS script and CSRF website to test against jwt-local-variable repo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />{" "}
    </SWRConfig>
  );
}

export default MyApp;
