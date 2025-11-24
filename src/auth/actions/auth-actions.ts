import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

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
  const hashedPassword = await bcrypt.hashSync(password, 10);

  if (email === "diego.aluicio@gmail.com") {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "admin", // or another valid role value
      },
    });
    return newUser;
  } else {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user", // or another valid role value
      },
    });
    return newUser;
  }
};


const editUser = async (email: string) => {

  if (email === "diego.aluicio@gmail.com") {
    const editUser = await prisma.user.update({
      where: { email },
      data: {
        role: "admin", // or another valid role value
      },
    });
    return editUser;
  } 
  }
};
