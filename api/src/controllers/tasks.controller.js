import { createTaskHook, getTaskByIdHook, deleteTaskHook, doneTaskHook, getTasksHook,updateTaskHook } from "../functions/tasks"; 

export const createTaskController = async (req, res) => {
    try {
        const task = await createTaskHook(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
export const getTasksController = async (req, res) => {
    try {
        const tasks = await getTasksHook(req.params.userId);
        res.status(200).json({ tasks });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
export const getTaskByIdController = async (req, res) => {
    try {
        const task = await getTaskByIdHook(req.params.id);
        res.status(200).json({ task });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
export const updateTaskController = async (req, res) => {
    try {
        const task = await updateTaskHook(req.params.id, req.body);
        res.status(200).json({ task });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
export const deleteTaskController = async (req, res) => {
    try {
        const task = await deleteTaskHook(req.params.id);
        res.status(200).json({ task });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
export const doneTaskController = async (req, res) => {
    try {
        const task = await doneTaskHook(req.params.id);
        res.status(200).json({ task });
    } catch (error) {
        console.error("Erro no Controller:", error);
        res.status(500).json({ error: error.message });
    }
}
