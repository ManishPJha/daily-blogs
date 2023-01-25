import "../styles/global.css";

import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@/utils/trpc";

function MyApp({ Component, ...rest }: AppProps) {
  const { pageProps } = rest;

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(MyApp);
