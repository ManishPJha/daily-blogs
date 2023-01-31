import jwt from "jsonwebtoken";

export async function signJWT(token: string) {
  const signedToken = await jwt.sign(
    token,
    process.env.JWT_SECRET_KEY as string,
    {
      algorithm: "RS256",
      expiresIn: process.env.JWT_EXPIRY,
    }
  );

  return signedToken;
}
export async function verifyJWT(token: string) {
  const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY as string, {
    algorithms: ["RS256"],
  });

  return decode;
}
