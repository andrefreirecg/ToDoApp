import prisma from "../services/prisma";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const jwt = require("jsonwebtoken");

export const loginHashedUser = async (data) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
        throw new Error("Dados incorretos", 401);
    }
    const passwordMatch = await compare(data.password, user.password);
    if (!passwordMatch) {
        throw new Error("Dados incorretos", 401);
    }
    const token = sign({ id: user.id }, process.env.JWT_SECRET);
    return { user, token };
};
