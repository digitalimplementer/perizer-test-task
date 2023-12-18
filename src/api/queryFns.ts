import { axiosInstance } from './axiosInstance';
import { User, Team } from './types';

/* TODO: for better scalability instead of queryFns.ts *.service.ts files can be created where we'd have a service with methods.

         For instance:

         const UserService = {
          fetchUserById: (id: string): Promise<Type> => {}
         };
*/

export const fetchUsers = async () => {
  return (await axiosInstance.get<Array<User>>('/users')).data;
};

export const fetchTeams = async () => {
  return (await axiosInstance.get<Array<Team>>('/teams')).data;
};
