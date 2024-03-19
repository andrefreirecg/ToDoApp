import { createUserHook, getUserByIdHook, deleteUserByIdHook } from "../functions/user";

export const createUser = async (req, res) => {
  
  try {
    const user = await createUserHook(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdHook(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteUserById = async (req, res) => {
  try {
    const user = await deleteUserByIdHook(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
