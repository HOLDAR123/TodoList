import axios from "axios";
import { useQuery, useMutation } from "react-query";

const getData = () => {
  return axios.get("http://localhost:8000/tasks");
};

const getOneData = (id) => () => {
  return axios.get(`http://localhost:8000/tasks/${id}`);
};

const addTasks = (item) => {
  return axios.post("http://localhost:8000/tasks", item);
};

const ChangeTask = (item) => {
  return axios.put(`http://localhost:8000/tasks/${item.id}`, item);
};

const deleteTask = (taskId) => {
  return axios.delete(`http://localhost:8000/tasks/${taskId}`);
};

export const useAddTask = () => {
  return useMutation(addTasks);
};

export const useAddState = () => {
  return useMutation(ChangeTask);
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};

export const DataParser = () => {
  return useQuery("favours", getData, {
    select: (data) => {
      return data.data;
    },
  });
};

export const OneDataParser = (id) => {
  return useQuery(`favour-${id}`, getOneData(id), {
    select: (data) => data.data,
  });
};