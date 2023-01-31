import "../styles/global.css";

import type { AppProps } from "next/app";
import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@/utils/trpc";
import dynamic from "next/dynamic";

import ErrorBoundary from "@/components/ErrorBoundary";
import Page from "@/Layout/Page";

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
      <ErrorBoundary>
        <Suspense fallback={<SuspenseComponent />}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Page>
            <Component {...pageProps} />
          </Page>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default trpc.withTRPC(MyApp);
