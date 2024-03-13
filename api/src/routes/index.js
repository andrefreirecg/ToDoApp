import userRoutes from "./user";
import authRoutes from "./auth";
const routes = (app) => {
    userRoutes(app);
    authRoutes(app);
}

export default routes;
