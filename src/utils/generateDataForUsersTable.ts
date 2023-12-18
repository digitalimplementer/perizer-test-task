import { User, Team } from '../api/types';
import { RowUserData } from '../components/UsersTable/UsersTable.types';

type GenerateDataForUsersTable = (users: Array<User>, teams: Array<Team>) => Array<RowUserData>;

export const generateDataForUsersTable: GenerateDataForUsersTable = (users, teams) => {
  return users.map((user) => ({
    key: user._id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    phone: user.phone,
    teamName: teams.find((team) => team.id === user.team)?.name || 'Not in the list',
    userRole: user.role,
    location: user.location,
    picture: user.picture,
  }));
};
