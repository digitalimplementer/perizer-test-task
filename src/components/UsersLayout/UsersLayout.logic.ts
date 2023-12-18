import React, { useState, useEffect } from 'react';
import { useQueries } from 'react-query';
import { fetchUsers, fetchTeams } from '../../api';
import { generateDataForUsersTable, filterDataForUsersTable } from '../../utils';
import { RowUserData } from '../UsersTable/UsersTable.types';

/*
  TODO: instead of keeping UsersFilter and UsersTable states in the parent component
        we could add context in app using Redux Toolkit, MobX or Valtio.
*/

export const useUsersLayoutLogic = () => {
  const [filterValue, setFilterValue] = useState('');
  const [usersTableData, setUsersTableData] = useState<Array<RowUserData>>([]);
  const [filteredUsersTableData, setFilteredUsersTableData] = useState<Array<RowUserData>>([]);


  const usersQueries = useQueries([
    {
      queryKey: ['users'],
      queryFn: fetchUsers,
    },
    {
      queryKey: ['teams'],
      queryFn: fetchTeams,
    },
  ]);

  const queriesSucceeded = usersQueries.every((query) => query.isSuccess);

  useEffect(() => {
    if (!queriesSucceeded) {
      return;
    }

    const users = usersQueries[0].data!;
    const teams = usersQueries[1].data!;

    setUsersTableData(generateDataForUsersTable(users, teams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queriesSucceeded]);

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    setFilteredUsersTableData(filterDataForUsersTable(filterValue, usersTableData))
  }, [filterValue, usersTableData])

  return { data: { usersTableData: filteredUsersTableData, filterValue }, handlers: { onFilterChange } };
};
