import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    const dbUser = await createUser(email, email, password);
    return dbUser;
  } else {
    await editUser(email);
  }

  const isValid = await bcrypt.compare(password, user.password ?? "");
  if (!isValid) return null;

  return user;
};

const createUser = async (name: string, email: string, password: string) => {
  const hashedPassword = bcrypt.hashSync(password, 10);

  const role = email === "crismaloug@gmail.com" ? "admin" : "user";

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  return newUser;
};

const editUser = async (email: string) => {
  const role = email === "crismaloug@gmail.com" ? "admin" : "user";

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { role },
  });

  return updatedUser;
};
