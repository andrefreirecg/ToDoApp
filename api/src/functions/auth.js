import prisma from "../services/prisma";

const jwt = require("jsonwebtoken");

export const loginHashedUser = async (data) => {
   try{
    const user = await prisma.user.findUnique({ where: { email: data.email.value } });
    if (!user) {
        throw new Error("Usuário não cadastrado", 401);
    }
    
    const passwordMatch = jwt.verify(user.password, process.env.JWT_SECRET);
    
    if (!passwordMatch) {
        throw new Error("Dados incorretos");
    }
    if (passwordMatch.value != data.password.value) {
        throw new Error("Dados incorretos");
    }
    
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: Math.floor(expiration.getTime() / 1000),
    });
    return { user, token };
   }catch(error){
    throw new Error(error.message);
   }
};
