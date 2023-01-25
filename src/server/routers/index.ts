import { procedure, router } from "@/server/trpc";
import * as auth from "@/server/controllers/auth";

import {
  registerSchema,
  updateProfileSchema,
  params,
  filterQuery,
} from "@/server/controllers/auth/constants";

export const authRoutes = {
  register: procedure
    .input(registerSchema)
    .mutation(({ input }) => auth.register({ input })),
  update: procedure
    .input(updateProfileSchema)
    .mutation(({ input }) =>
      auth.update({ param: input.params, input: input.body })
    ),
  me: procedure
    .input(params)
    .mutation(({ input }) => auth.profile({ param: input })),
  findAll: procedure
    .input(filterQuery)
    .mutation(({ input }) => auth.findAll({ filterQuery: input })),
  remove: procedure
    .input(params)
    .mutation(({ input }) => auth.remove({ param: input })),
};
