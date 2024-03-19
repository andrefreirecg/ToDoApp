import userRoutes from "./user";
import authRoutes from "./auth";
import taskRoutes from "./tasks";
const routes = (app) => {
    userRoutes(app);
    authRoutes(app);
    taskRoutes(app);
}

export default routes;
