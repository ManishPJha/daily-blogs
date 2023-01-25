import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
  onError: ({ error, type, path, input, ctx, req }) => {
    console.log(`>>>ERROR:`, error);
    if (error.code === "INTERNAL_SERVER_ERROR") {
    }
  },
});
