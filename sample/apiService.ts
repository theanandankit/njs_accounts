// apiService.ts

import { get, post, put, del } from './axiosInstance';

export const getUsers = () => {
  const users = get('/users');
  if (users.ok) {
    return users.data;
  }
};

export const getUser = (id: number) => {
  return get(`/users/${id}`);
};

export const createUser = (data: any) => {
  return post('/users', data);
};

export const updateUser = (id: number, data: any) => {
  return put(`/users/${id}`, data);
};

export const deleteUser = (id: number) => {
  return del(`/users/${id}`);
};

/*
MethodFullname for {get, put, post, del} are
    "sample/axiosInstance.ts::program:get",
    "sample/axiosInstance.ts::program:post",
    "sample/axiosInstance.ts::program:put",
    "sample/axiosInstance.ts::program:del",
but expected
    "axios:axios:create:<returnValue>:get",
    "axios:axios:create:<returnValue>:post",
    "axios:axios:create:<returnValue>:put",
    "axios:axios:create:<returnValue>:delete"
/*
