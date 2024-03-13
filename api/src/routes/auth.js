import { login } from "../controllers/auth.controller";

const authRoutes = (app) => {
    app.post('/auth', login);
}

export default authRoutes;
