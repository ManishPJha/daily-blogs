import * as trpcNext from "@trpc/server/adapters/next";
import type { inferAsyncReturnType } from "@trpc/server";

import { deserializeUser } from "@/server/middlewares/deserializeUser";

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  return deserializeUser({ req, res });
}

export type Context = inferAsyncReturnType<typeof createContext>;
