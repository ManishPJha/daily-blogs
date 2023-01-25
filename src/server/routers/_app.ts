import { procedure, router } from "@/server/trpc";
import { authRoutes } from "@/server/routers";

export const appRouter = router({
  welcome: procedure.query((req) => {
    return {
      message: `welcome user!`,
    };
  }),
  ...authRoutes,
});

export type AppRouter = typeof appRouter;
