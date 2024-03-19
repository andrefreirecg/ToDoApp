import {createTaskController, updateTaskController, getTasksController, getTaskByIdController,deleteTaskController, doneTaskController} from "../controllers/tasks.controller";

const taskRoutes = (app) => {
  app.post('/create-task', createTaskController);
    app.get('/tasks/:userId', getTasksController);
    app.get('/task/:id', getTaskByIdController);
    app.put('/update-task/:id', updateTaskController);
    app.delete('/delete-task/:id', deleteTaskController);
    app.post('/done-task/:id', doneTaskController);
}

export default taskRoutes;
