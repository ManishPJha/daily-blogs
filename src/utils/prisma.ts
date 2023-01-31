import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

export default async function connectDatabase() {
  try {
    await prisma.$connect();
    console.log("🚀 database connected");
  } catch (error) {
    console.log(`>>>db_error:`, error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
