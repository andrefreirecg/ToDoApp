import prisma from "../services/prisma";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const jwt = require("jsonwebtoken");

export const loginHashedUser = async (data) => {
    const user = await prisma.user.findUnique({ where: { email: data.email.value } });
    if (!user) {
        throw new Error("Dados incorretos", 401);
    }
    const passwordMatch = await compare(data.password.value, user.password);
    if (!passwordMatch) {
        throw new Error("Dados incorretos", 401);
    }
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: Math.floor(expiration.getTime() / 1000),
    });
    return { user, token };
};
