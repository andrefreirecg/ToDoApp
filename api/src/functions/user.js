import prisma from "../services/prisma";
import jwt from 'jsonwebtoken';
export const createUserHook = async (data) => {
  
  const passHashed = jwt.sign(data.password, process.env.JWT_SECRET);
  let userData = {
    email: data.email.value ?? data.email,
    name: data.name.value ?? data.name,
    password: passHashed
  }
  console.log(userData)
  const user = await prisma.user.create({
    data: userData,
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
