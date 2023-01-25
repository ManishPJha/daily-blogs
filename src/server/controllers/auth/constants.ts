import { z, TypeOf } from "zod";

const Address = z
  .object({
    pincode: z.number().max(6),
    street: z.string(),
    address: z.string(),
  })
  .optional();

export const params = z.object({
  id: z.string(),
});

export const registerSchema = z.object({
  firstName: z.string({
    required_error: "firstName is required field!",
  }),
  middleName: z.string(),
  lastName: z.string({
    required_error: "lastName is required field!",
  }),
  email: z
    .string({
      required_error: "email is required field!",
    })
    .email("email is invalid!"),
  password: z
    .string({
      required_error: "password is required field!",
    })
    .max(12)
    .min(6),
  address: Address,
});

export const updateProfileSchema = z.object({
  params,
  body: z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      address: Address,
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(10),
  page: z.number().default(1),
});

export type ParamsInput = TypeOf<typeof params>;
export type filterQueryInputs = TypeOf<typeof filterQuery>;
export type RegisterInputs = TypeOf<typeof registerSchema>;
export type UpdateProfileInputs = TypeOf<typeof updateProfileSchema>;
