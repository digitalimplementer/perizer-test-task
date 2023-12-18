import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './UsersFilter.module.css';
import { Props } from './UsersFilter.types';

function UsersFilter({ filterValue, onFilterChange }: Props) {
  return (
    <Input
      className={styles.usersFilterInput}
      size="large"
      placeholder="Filter by name, email, gender, team name and user role"
      prefix={<UserOutlined />}
      value={filterValue}
      onChange={onFilterChange}
    />
  );
}

export default UsersFilter;
