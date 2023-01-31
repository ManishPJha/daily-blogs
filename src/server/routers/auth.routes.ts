import {
  publicProcedure,
  privateProcedure,
  router,
} from "@/server/createRoutes";
import * as auth from "@/server/controllers/auth";

import {
  registerSchema,
  updateProfileSchema,
  params,
  filterQuery,
} from "@/server/controllers/auth/constants";

export const authRoutes = router({
  register: publicProcedure
    .input(registerSchema)
    .mutation(({ input }) => auth.register({ input })),
  update: privateProcedure
    .input(updateProfileSchema)
    .mutation(({ input }) =>
      auth.update({ param: input.params, input: input.body })
    ),
  me: privateProcedure
    .input(params)
    .mutation(({ input }) => auth.profile({ param: input })),
  findAll: publicProcedure
    .input(filterQuery)
    .mutation(({ input }) => auth.findAll({ filterQuery: input })),
  remove: privateProcedure
    .input(params)
    .mutation(({ input }) => auth.remove({ param: input })),
});
