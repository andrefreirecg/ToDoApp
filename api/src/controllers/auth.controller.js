import { loginHashedUser } from "../functions/auth";

export const login = async (req, res) => {
  try {
    const user = await loginHashedUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    if (error.message === "Usuário não cadastrado" || error.message === "Dados incorretos") {
      res.status(401).json({ message: error.message });
      return;
    }else{
      res.status(400).json({ message: error.message });
      return;
    }
  }
}
