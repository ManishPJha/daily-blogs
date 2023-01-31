import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { Context } from "@/server/createContext";

import connectDatabase from "@/utils/prisma"

connectDatabase();

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

const adminRoutes = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "unauthorized request detected!",
    });
  }

  return next();
});

// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(adminRoutes);
