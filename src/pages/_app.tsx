import "../styles/global.css";

import type { AppProps } from "next/app";
import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@/utils/trpc";
import dynamic from "next/dynamic";

const SuspenseComponent = dynamic(
  () => import("@/components/SuspenseContent"),
  {
    suspense: true,
  }
);

function MyApp({ Component, ...rest }: AppProps) {
  const { pageProps } = rest;

  return (
    <>
      <Suspense fallback={<SuspenseComponent />}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}

export default trpc.withTRPC(MyApp);
