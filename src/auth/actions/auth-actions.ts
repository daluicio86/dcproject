import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    const dbUser = await createUser(email, email, password);
    return dbUser;
  }
  const isValid = await bcrypt.compare(password, user.password ?? "");
  if (!isValid) return null;

  return user;
};

const createUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "user", // or another valid role value
    },
  });
  return newUser;
};
