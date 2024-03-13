import prisma from "../services/prisma";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const jwt = require("jsonwebtoken");

export const loginHashedUser = async (data) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
        throw new Error("User not found");
    }
    const passwordMatch = await compare(data.password, user.password);
    console.log(data.password, user.password, passwordMatch);
    if (!passwordMatch) {
        throw new Error("Invalid password");
    }
    const token = sign({ id: user.id }, process.env.JWT_SECRET);
    return { user, token };
};
