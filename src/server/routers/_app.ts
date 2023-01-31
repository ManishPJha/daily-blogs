import { t } from "@/server/createRoutes";
import { authRoutes } from "@/server/routers/auth.routes";

const publicRoutes = t.router({
  welcome: t.procedure.query((req) => {
    return {
      message: "Welcome Message!",
    };
  }),
});

export const appRouter = t.mergeRouters(publicRoutes, authRoutes);

export type AppRouter = typeof appRouter;
