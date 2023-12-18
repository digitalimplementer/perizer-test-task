import { checkEmptyString } from './checkEmptyString';
import { checkStrContainsAnother } from './checkStrContainsAnother';
import { RowUserData } from '../components/UsersTable/UsersTable.types';

type FilterDataForUsersTable = (filterValue: string, userData: Array<RowUserData>) => Array<RowUserData>;

export const filterDataForUsersTable: FilterDataForUsersTable = (filterValue, userData) => {
  if (checkEmptyString(filterValue)) {
    return userData;
  }
  return userData.filter(
    (user) =>
      checkStrContainsAnother(user.name, filterValue) ||
      checkStrContainsAnother(user.email, filterValue) ||
      checkStrContainsAnother(user.gender, filterValue) ||
      checkStrContainsAnother(user.userRole, filterValue) ||
      checkStrContainsAnother(user.teamName, filterValue)
  );
};
