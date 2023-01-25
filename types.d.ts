type UserInputTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterUserTypes<T = any> = {
  data: UserInputTypes | T;
};