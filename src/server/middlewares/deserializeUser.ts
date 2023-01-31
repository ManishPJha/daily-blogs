import { TRPCError } from "@trpc/server";
import { NextApiRequest, NextApiResponse } from "next";

import { verifyJWT } from "@/utils/jwt";

export async function deserializeUser({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  try {
    let token;

    const notAuthenticated = {
      req,
      res,
      user: null,
    };

    if (req.headers.authorization) {
      token = req.headers.authorization?.split(" ")[1];
    } else if (req.cookies["access-token"]) {
      token = req.cookies["access-token"];
    }

    if (!token) {
      return notAuthenticated;
    }

    const decode = await verifyJWT(token);

    if (!decode) return notAuthenticated;

    return {
      req,
      res,
      user: decode,
    };
  } catch (error: any) {
    console.log(`>>>ERROR`, error);
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
}
