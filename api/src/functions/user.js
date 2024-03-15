import prisma from "../services/prisma";
import bcrypt from 'bcrypt';

export const createUserHook = async (data) => {
  const passHashed = await bcrypt.hash(data.password.value, 10);
  
  const user = await prisma.user.create({
    data: {
      email: data.email.value,
      name: data.name.value,
      password: passHashed
    },
  });
  return user;
}

export const getUserByIdHook = async (id) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}
export const deleteUserByIdHook = async (id) => {
  const user = await prisma.user.delete({ where: { id } });
  return user;
}
