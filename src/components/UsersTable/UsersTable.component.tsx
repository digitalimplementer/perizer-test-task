import { Table } from 'antd';
import { columns } from './UserTable.logic';
import { Props } from './UsersTable.types';

function UsersTable({ dataSource }: Props) {
  return <Table columns={columns} dataSource={dataSource} />;
}

export default UsersTable;
