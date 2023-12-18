import { axiosInstance } from './axiosInstance';
import { User, Team } from './types';

export const fetchUsers = async () => {
  return (await axiosInstance.get<Array<User>>('/users')).data;
};

export const fetchTeams = async () => {
  return (await axiosInstance.get<Array<Team>>('/teams')).data;
};
