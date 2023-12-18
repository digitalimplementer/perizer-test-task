import { ColumnsType, Avatar } from 'antd';
import { RowUserData } from './UsersTable.types';

export const columns: ColumnsType<RowUserData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Team Name',
    dataIndex: 'teamName',
    key: 'teamName',
  },
  {
    title: 'User Role',
    dataIndex: 'userRole',
    key: 'userRole',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Picture',
    dataIndex: 'picture',
    key: 'picture',
    render: (pictureSrc) => {
      return <Avatar src={pictureSrc} size={48} shape="square" />;
    },
  },
];
