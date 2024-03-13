import {createUser, getUserById, deleteUserById} from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post('/create-user', createUser);
  app.get('/user/:id', getUserById);
  app.delete('/user/:id', deleteUserById);
}

export default userRoutes;
