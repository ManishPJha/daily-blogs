import { TRPCError } from "@trpc/server";
import { Prisma, PrismaClient } from "@prisma/client";
import {
  RegisterInputs,
  UpdateProfileInputs,
  filterQueryInputs,
  ParamsInput,
} from "@/server/controllers/auth/constants";

const prisma = new PrismaClient();

/**
 *
 * @input resgister input data
 * @returns registered user data
 */
export const register = async ({ input }: { input: RegisterInputs }) => {
  try {
    const isUserExist = await prisma.user.findFirst({
      where: {
        email: input.email,
      },
    });

    if (isUserExist) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "user already exist with this email!",
      });
    }

    const user = await prisma.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
        address: input.address,
      },
    });

    return {
      success: true,
      status: "success",
      data: user,
      message: `user registration successful with id ${user.id}`,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "user already exist with this title!!",
        });
      }
    }
    throw error;
  }
};

/**
 *
 * @param param query id
 * @param input update profile data
 * @returns updated profile data
 */
export const update = async ({
  param,
  input,
}: {
  param: ParamsInput;
  input: UpdateProfileInputs["body"];
}) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: param.id,
      },
      data: input,
    });

    return {
      success: true,
      status: "success",
      data: user,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "user already exist with this title!",
      });
    }
    throw error;
  }
};

/**
 *
 * @param param query id
 * @returns profile data
 */
export const profile = async ({ param }: { param: ParamsInput }) => {
  try {
    const me = await prisma.user.findFirst({
      where: {
        id: param.id,
      },
    });

    return {
      success: true,
      status: "success",
      data: me,
    };
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param filterQuery pagination query(limit, page)
 * @returns filter query users data
 */
export const findAll = async ({
  filterQuery,
}: {
  filterQuery: filterQueryInputs;
}) => {
  try {
    const page = filterQuery.page || 1;
    const limit = filterQuery.limit || 10;
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({ skip, take: limit });

    return {
      success: true,
      status: "success",
      users,
    };
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param param query id
 * @returns remove user response
 */
export const remove = async ({ param }: { param: ParamsInput }) => {
  try {
    await prisma.user.delete({
      where: {
        id: param.id,
      },
    });
    return {
      success: true,
      status: "success",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `user not found with ID: ${param.id}`,
        });
      }
    }
    throw error;
  }
};
