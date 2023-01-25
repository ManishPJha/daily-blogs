import { httpBatchLink, getFetch } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import checkEnvironments from "@/utils/checkEnvironments";
import superjson from "superjson";
import type { AppRouter } from "@/server/routers/_app";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      return {
        transformer: superjson,
        links: [
          httpBatchLink({
            url: "/api/trpc",
          }),
        ],
      };
    }

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      links: [
        httpBatchLink({
          url: checkEnvironments().concat("/api/trpc"),
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
      transformer: superjson,
    };
  },
  ssr: true,
});
