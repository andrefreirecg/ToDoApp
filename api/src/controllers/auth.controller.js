import { loginHashedUser } from "../functions/auth";

export const login = async (req, res) => {
  try {
    const user = await loginHashedUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
