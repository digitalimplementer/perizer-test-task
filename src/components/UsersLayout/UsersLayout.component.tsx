import UsersFilter from '../UsersFilter';
import UsersTable from '../UsersTable';
import { useUsersLayoutLogic } from './UsersLayout.logic';

function UsersLayout() {
  const { data, handlers } = useUsersLayoutLogic();

  return (
    <>
      <UsersFilter filterValue={data.filterValue} onFilterChange={handlers.onFilterChange} />
      <UsersTable dataSource={data.usersTableData} />
    </>
  );
}

export default UsersLayout;
