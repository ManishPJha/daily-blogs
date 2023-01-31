import { z, TypeOf } from "zod";

export const AppStateSchema = z.object({
  token: z.string().default(""),
  theme: z.string().default("light"),
});

export type AppStateType = TypeOf<typeof AppStateSchema>;
