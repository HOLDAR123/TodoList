import axios from "axios";
import {
  useQuery,
  useMutation
} from "react-query";

const getTasks = () => {
  return axios.get("http://localhost:8000/tasks");
};

const getOneTask = (id) => () => {
  return axios.get(`http://localhost:8000/tasks/${id}`);
};

const addTask = (item) => {
  return axios.post("http://localhost:8000/tasks", item);
};

const editTask = (item) => {
  return axios.put(`http://localhost:8000/tasks/${item.id}`, item);
};

const deleteTask = (taskId) => {
  return axios.delete(`http://localhost:8000/tasks/${taskId}`);
};

export const useAddTask = () => {
  return useMutation(addTask);
};

export const useEditTask = () => {
  return useMutation(editTask);
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};

export const GetTasks = () => {
  return useQuery("todos", getTasks, {
    select: (data) => {
      return data.data;
    },
  });
};

export const GetTaskById = (id) => {
  return useQuery(`todo-${id}`, getOneTask(id), {
    select: (data) => data.data,
  });
};