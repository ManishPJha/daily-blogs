import { object, string, TypeOf, any } from "zod";

const UserInputTypes = object({
  firstName: string(),
  lastName: string(),
  email: string().email("email is not valid!"),
  password: string(),
});

const MutationsPropsTypes = object({
  type: string(),
  input: any(),
});

export type Register = TypeOf<typeof UserInputTypes>;

export type MutationActionType = TypeOf<typeof MutationsPropsTypes>;
