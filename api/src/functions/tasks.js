import prisma from "../services/prisma";
export const createTaskHook = async (data) => {
  const task = await prisma.task.create({
    data: {
      title: data.title, 
      userId: data.userId,
      urgency: data.urgency,
    },
  });
  return task;
};
export const getTasksHook = async (userId) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
  });
  return tasks;
}
export const getTaskByIdHook = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });
  return task;
}
export const updateTaskHook = async (id, data) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title: data.title,
    },
  });
  return task;
}

export const deleteTaskHook = async (id) => {
  let taskID = parseInt(id);
  const task = await prisma.task.delete({
    where: {
      id: taskID,
    },
  });
  return task;
}

export const doneTaskHook = async (id) => {
  let newId = parseInt(id);
  let task = await prisma.task.findUnique({
    where: {
      id: newId,
    },
  });
  let done = task.done;
  const attTask = await prisma.task.update({
    where: {
      id: newId,
    },
    data: {
      done: !done,
    },
  });
  return attTask;
}
