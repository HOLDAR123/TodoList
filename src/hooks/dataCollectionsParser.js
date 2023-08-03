import axios from "axios";
import {
  useQuery,
  useMutation
} from "react-query";

const getCollections = () => {
  return axios.get("http://localhost:8000/collections");
};

const getOneCollection = (id) => () => {
  return axios.get(`http://localhost:8000/collections/${id}`);
};

const addCollection = (item) => {
  return axios.post("http://localhost:8000/collections", item);
};

const editCollection = (item) => {
  return axios.put(`http://localhost:8000/collections/${item.id}`, item);
};

const deleteCollection = (taskId) => {
  return axios.delete(`http://localhost:8000/collections/${taskId}`);
};

export const useAddCollection = () => {
  return useMutation(addCollection);
};

export const useEditCollection = () => {
  return useMutation(editCollection);
};

export const useDeleteCollection = () => {
  return useMutation(deleteCollection);
};

export const GetCollections = () => {
  return useQuery("collections", getCollections, {
    select: (data) => {
      return data.data;
    },
  });
};

export const useGetCollectionById = (id) => {
  return useQuery(["collection", id], () => getOneCollection(id)(), {
    select: (data) => data.data,
  });
};
